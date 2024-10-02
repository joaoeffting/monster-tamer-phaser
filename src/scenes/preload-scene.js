import { PRELOAD_SCENE_ASSETS_KEYS, BATTLE_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.PRELOAD_SCENE, active: true });
  }

  init() {

  }

  preload() {
    this.load.image(PRELOAD_SCENE_ASSETS_KEYS.FOREST, 'assets/images/monster-tamer/battle-backgrounds/forest-background.png');
    this.load.image(BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND, 'assets/images/kenneys-assets/ui-space-expansion/custom-ui.png');

    this.load.image(HEALTH_BAR_ASSET_KEYS.RIGHT_CAP, 'assets/images/kenneys-assets/ui-space-expansion/barHorizontal_green_right.png');
    this.load.image(HEALTH_BAR_ASSET_KEYS.LEFT_CAP, 'assets/images/kenneys-assets/ui-space-expansion/barHorizontal_green_left.png');
    this.load.image(HEALTH_BAR_ASSET_KEYS.MIDDLE, 'assets/images/kenneys-assets/ui-space-expansion/barHorizontal_green_mid.png');

    // monster
    this.load.image(MONSTER_ASSET_KEYS.CARNODUSK, 'assets/images/monster-tamer/monsters/carnodusk.png');
    this.load.image(MONSTER_ASSET_KEYS.IGUANIGNITE, 'assets/images/monster-tamer/monsters/iguanignite.png');
  }

  create() {
    

    this.add.image(this.scale.width / 2, this.scale.height / 2, PRELOAD_SCENE_ASSETS_KEYS.FOREST);
  }

  update() {

  }
}
