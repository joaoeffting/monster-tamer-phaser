import { PRELOAD_SCENE_ASSETS_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class BattleScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.BATTLE_SCENE });
  }

  init() {

  }

  preload() {
    
  }

  create() {
    // create the background
    this.add.image(this.scale.width / 2, this.scale.height / 2, PRELOAD_SCENE_ASSETS_KEYS.FOREST);

    // create player and enemy monsters
    this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
    this.add.image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true);
  }

  update() {

  }
}
