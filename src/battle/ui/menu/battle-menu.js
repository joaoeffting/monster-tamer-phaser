import { MONSTER_ASSET_KEYS } from "../../../assets/asset-keys.js";

const BATTLE_MENU_OPTIONS = Object.freeze({
  FIGHT: "FIGHT",
  SWITCH: "SWITCH",
  ITEM: "ITEM",
  FLEE: "FLEEE",
});

const battleUITextStyle = {
  color: "black",
  fontSize: "30px",
};

export class BattleMenu {
  #scene;
  #mainBattleMenuPhaserContainerGameObject;
  #moveSelectionSubBattleMenuPhaserContainerGameObject;
  #battleTextGameObjectLine1;
  #battleTextGameObjectLine2;

  constructor(scene) {
    this.#scene = scene;

    this.#createMainInfoPanel();

    this.#createMainBattleMenu();
    this.#createMonsterAttackSubMenu();
  }

  showMainBattleMenu() {
    this.#battleTextGameObjectLine1.setText("What should");
    this.#mainBattleMenuPhaserContainerGameObject.setAlpha(1);
    this.#battleTextGameObjectLine1.setAlpha(1);
    this.#battleTextGameObjectLine2.setAlpha(1);
  }

  hideMainBattleMenu() {
    this.#mainBattleMenuPhaserContainerGameObject.setAlpha(0);
    this.#battleTextGameObjectLine1.setAlpha(0);
    this.#battleTextGameObjectLine2.setAlpha(0);
  }

  showMonsterAttackSubMenu() {
    this.#moveSelectionSubBattleMenuPhaserContainerGameObject.setAlpha(1);
  }

  hideMonsterAttackSubMenu() {
    this.#moveSelectionSubBattleMenuPhaserContainerGameObject.setAlpha(0);
  }

  #createMainBattleMenu() {
    this.#createMainInfoPanel();

    this.#battleTextGameObjectLine1 = this.#scene.add.text(
      20,
      468,
      "What should",
      battleUITextStyle
    );
    this.#battleTextGameObjectLine2 = this.#scene.add.text(
      20,
      512,
      `${MONSTER_ASSET_KEYS.IGUANIGNITE} do next`,
      battleUITextStyle
    );
    const subpanel = this.#createMainInfoSubPanel();
    this.#mainBattleMenuPhaserContainerGameObject = this.#scene.add.container(
      520,
      448,
      [subpanel, ...this.#createMainInfoSubPanelMenu()]
    );
    this.hideMainBattleMenu();
  }

  #createMonsterAttackSubMenu() {
    this.#moveSelectionSubBattleMenuPhaserContainerGameObject =
      this.#scene.add.container(0, 448, [...this.#createMainInfoPanelMenu()]);
    this.hideMonsterAttackSubMenu();
  }

  #createMainInfoSubPanelMenu() {
    return [
      this.#scene.add.text(
        55,
        22,
        BATTLE_MENU_OPTIONS.FIGHT,
        battleUITextStyle
      ),
      this.#scene.add.text(
        240,
        22,
        BATTLE_MENU_OPTIONS.SWITCH,
        battleUITextStyle
      ),
      this.#scene.add.text(55, 70, BATTLE_MENU_OPTIONS.ITEM, battleUITextStyle),
      this.#scene.add.text(
        240,
        70,
        BATTLE_MENU_OPTIONS.FLEE,
        battleUITextStyle
      ),
    ];
  }

  #createMainInfoPanelMenu() {
    return [
      this.#scene.add.text(55, 22, "slash", battleUITextStyle),
      this.#scene.add.text(240, 22, "growl", battleUITextStyle),
      this.#scene.add.text(55, 70, "-", battleUITextStyle),
      this.#scene.add.text(240, 70, "-", battleUITextStyle),
    ];
  }

  #createMainInfoPanel() {
    const padding = 4;
    const rectangleHeight = 124;
    return this.#scene.add
      .rectangle(
        padding,
        this.#scene.scale.height - rectangleHeight - padding,
        this.#scene.scale.width - padding * 2,
        rectangleHeight,
        0xede4f3,
        1
      )
      .setOrigin(0)
      .setStrokeStyle(8, 0xe44348, 1);
  }

  #createMainInfoSubPanel() {
    const rectangleWidth = 500;
    const rectangleHeight = 124;
    return this.#scene.add
      .rectangle(0, 0, rectangleWidth, rectangleHeight, 0xede4f3, 1)
      .setOrigin(0)
      .setStrokeStyle(8, 0x905ac2, 1);
  }
}
