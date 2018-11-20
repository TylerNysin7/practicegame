
export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image('sky', 'assets/boilerplate/sky.png');
    this.load.image('ground', 'assets/boilerplate/platform.png');
    this.load.image('star', 'assets/boilerplate/star.png');
    this.load.image('bomb', 'assets/boilerplate/bomb.png');
    this.load.spritesheet('dude', 'assets/boilerplate/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  create(): void {
    this.add.image(400, 300, 'sky');
  }
}
