import {
  PRELOAD_SCENE_ASSETS_KEYS,
  MONSTER_ASSET_KEYS,
  BATTLE_ASSET_KEYS,
  HEALTH_BAR_ASSET_KEYS,
} from "../assets/asset-keys.js";
import { BattleMenu } from "../battle/ui/menu/battle-menu.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class BattleScene extends Phaser.Scene {
  #battleMenu;
  constructor() {
    super({ key: SCENE_KEYS.BATTLE_SCENE });
  }

  init() {}

  preload() {}

  create() {
    // create the background
    this.add.image(
      this.scale.width / 2,
      this.scale.height / 2,
      PRELOAD_SCENE_ASSETS_KEYS.FOREST
    );

    // create player and enemy monsters
    this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
    this.add.image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true);

    // player helthbar
    this.#createPlayerMonsterContainer();
    this.#createEnemyMonsterContainer();

    this.#battleMenu = new BattleMenu(this);
    this.#battleMenu.showMainBattleMenu();
  }

  update() {}

  #createPlayerMonsterContainer() {
    const playerMonsterName = this.#createMonsterName(
      MONSTER_ASSET_KEYS.IGUANIGNITE
    );
    const playerMonsterLevel = this.#createMonsterLevelText(
      playerMonsterName.width + 35,
      23
    );
    const containerBackground = this.add
      .image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
      .setOrigin(0);
    const hpText = this.#createHPText();
    const playerMonsterHPValue = this.#createHPValue();

    this.add.container(556, 318, [
      containerBackground,
      playerMonsterName,
      this.#createHealthbar(34, 34),
      playerMonsterLevel,
      hpText,
      playerMonsterHPValue,
    ]);
  }

  #createEnemyMonsterContainer() {
    const enemyMonsterName = this.#createMonsterName(
      MONSTER_ASSET_KEYS.CARNODUSK
    );
    const enemyMonsterLevel = this.#createMonsterLevelText(
      enemyMonsterName.width + 35,
      23
    );
    const containerBackground = this.add
      .image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
      .setOrigin(0);
    const hpText = this.#createHPText();
    const enemyMonsterHPValue = this.#createHPValue();

    this.add.container(5, 10, [
      containerBackground,
      enemyMonsterName,
      this.#createHealthbar(34, 34),
      enemyMonsterLevel,
      hpText,
      enemyMonsterHPValue,
    ]);
  }

  #createHPValue() {
    return this.add
      .text(443, 80, "25/25", {
        color: "#7E3D3F",
        fontSize: "16px",
      })
      .setOrigin(1, 0);
  }

  #createHPText() {
    return this.add.text(30, 55, "HP", {
      color: "#FF6505",
      fontSize: "24px",
      fontStyle: "italic",
    });
  }

  #createMonsterLevelText(x, y) {
    return this.add.text(x, y, "LVL", {
      color: "#ED474B",
      fontSize: "28px",
    });
  }

  #createMonsterName(monsterName) {
    return this.add.text(30, 20, monsterName, {
      color: "#7E3D3F",
      fontSize: "32px",
    });
  }

  #createHealthbar(x, y) {
    const scale = 0.7;
    const leftCap = this.add
      .image(x, y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP)
      .setOrigin(0, 0.5)
      .setScale(1, scale);
    const middle = this.add
      .image(leftCap.x + leftCap.width, y, HEALTH_BAR_ASSET_KEYS.MIDDLE)
      .setOrigin(0, 0.5)
      .setScale(1, scale);
    middle.displayWidth = 360;
    const rightCap = this.add
      .image(middle.x + middle.displayWidth, y, HEALTH_BAR_ASSET_KEYS.RIGHT_CAP)
      .setOrigin(0, 0.5)
      .setScale(1, scale);
    return this.add.container(x, y, [leftCap, middle, rightCap]);
  }
}
