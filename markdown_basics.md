# Вот вам стишок, чтобы не читать пустые заголовки
*On n'a pas ~~forcément~~ besoin d'une **raison***  
__pour faire *sourire* les autres__  
_Le bonheur éclot en une douce floraison_  
***Et leur bonheur en réchauffe plein de nôtres***
## Когда-нибудь он расширится во что-то полноценное (надеюсь)
### Хотите ссылку на мой маленький новогодний склад с вырвиглазным дизайном?
Даже если не хотите, [держите](https://3qhjw4nrty6m57.github.io/kinozimushka/)
#### Моя спамная почта как пример автоматической сслки
deariate07@gmail.com
##### Ну, и вернёмся к стишку
[Aand... jump!](#вот-вам-стишок-чтобы-не-читать-пустые-заголовки)
###### И немножко списков, тут один чудак из синей будки передаавал...
1. Don't blink
    - Don't even blink
    - Blink. and you're dead
2. They are fast, faster than you can believe
3. Don't turn your back
4. Don't look away and **don't blink!**  
![Good luck](https://picloud.cc/i/b428778bf184289e0e766e605937bb61.jpg)
5. Any image of the Angel becomes one.
```Python
import random

def create_wizard():
    names = ["Merlin", "Gandalf", "Dumbledore", "Saruman", "Morgana", "Elminster", "Circe", "Rowena", "Hecate", "Rincewind", "Baba Yaga", "Glinda", "Albus", "Nimue", "Zalathar"]
    spells = ["Fireball", "Levitation", "Invisibility", "Teleportation", "Lightning Strike", "Healing Touch", "Ice Storm", "Mind Control", "Shadow Step", "Time Warp", "Summon Storm", "Telekinesis", "Flame Whip", "Waterbend", "Earthquake"]
    creatures = ["Dragon", "Phoenix", "Griffin", "Chimera", "Basilisk", "Unicorn", "Hippogriff", "Manticore", "Cerberus", "Kraken", "Wendigo", "Nymph", "Werewolf", "Minotaur", "Cockatrice"]

    wizard_name = random.choice(names)
    wizard_spell = random.choice(spells)
    wizard_creature = random.choice(creatures)

    print(f"Meet {wizard_name} the Dreadfull! 🧙‍♂️")
    print(f"Favorite spell: {wizard_spell} 🔮")
    print(f"Favorite creature: {wizard_creature} 🐉")
    print(f"Warning: {wizard_name} has a very *wild* pet...")

    if random.random() < 0.5:
        print(f"Watch out! {wizard_name}'s pet {wizard_creature} is on the loose! Run!")
    else:
        print(f"Good news! {wizard_name}'s pet {wizard_creature} is taking a nap. Safe to approach.")

create_wizard()
```