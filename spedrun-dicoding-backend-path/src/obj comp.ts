class Character {
  name: string;
  health: number;
  mana: number;

  constructor(name: string, health: number, mana: number) {
    this.name = name;
    this.health = health;
    this.mana = mana;
  }

  move(): void {
    console.log(`${this.name} sedang bergerak`);
  }

  checkMana(): void {
    if (this.mana < 0) {
      console.log(`${this.name} tidak memiliki mana`);
    }
  }
}

const canAttack = (character: Character): { canAttack: () => void } => {
  return {
    canAttack() {
      console.log(`${character.name} ini bisa menyerang`);
    },
  };
};

const canCastSpell = (character: Character): { canCastSpell: () => void } => {
  return {
    canCastSpell() {
      console.log(`${character.name} ini bisa menggunakan spell`);
    },
  };
};

const newMonster = (name: string): Character & { canAttack: () => void } => {
  const monster = new Character(name, 100, 0);
  return (<any>Object).assign(monster, canAttack(monster));
};

const newPlayer = (
  name: string
): Character & { canAttack: () => void; canCastSpell: () => void } => {
  const player = new Character(name, 100, 50);
  return (<any>Object).assign(player, canAttack(player), canCastSpell(player));
};

const p1 = newPlayer("hero");
