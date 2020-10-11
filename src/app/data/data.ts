export enum EvidenceTypes {
  SpiritBox = 1,
  Fingerprints = 2,
  GhostWriting = 3,
  Freezing = 4,
  EmfLevel5 = 5,
  GhostOrbs = 6
}

export const allEvidence = [
  {
    label: 'Spirit Box',
    value: EvidenceTypes.SpiritBox
  },
  {
    label: 'Fingerprints',
    value: EvidenceTypes.Fingerprints
  },
  {
    label: 'Ghost Writing',
    value: EvidenceTypes.GhostWriting
  },
  {
    label: 'Freezing Temperatures',
    value: EvidenceTypes.Freezing
  },
  {
    label: 'EMF Level 5',
    value: EvidenceTypes.EmfLevel5
  },
  {
    label: 'Ghost Orbs',
    value: EvidenceTypes.GhostOrbs
  }
]

export const ghosts = [
  {
    name: 'Spirit',
    evidence: [EvidenceTypes.SpiritBox, EvidenceTypes.Fingerprints, EvidenceTypes.GhostWriting],
    description: 'A Spirit is the most common Ghost you will come across. However, it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.',
    strength: 'Nothing.',
    weakness: 'Using smudge sticks stops from starting for a long time.'
  },
  {
    name: 'Wraith',
    evidence: [EvidenceTypes.SpiritBox, EvidenceTypes.Fingerprints, EvidenceTypes.Freezing],
    description: 'A Wraith is one of the most dangerous Ghosts you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known to travel through walls.',
    strength: 'One of the most dangerous ghosts. Can fly through walls and doesn’t leave footprints.',
    weakness: 'Has a toxic reaction to salt.'
  },
  {
    name: 'Phantom',
    evidence: [EvidenceTypes.Freezing, EvidenceTypes.EmfLevel5, EvidenceTypes.GhostOrbs],
    description: 'A rather slow but dangerous type of ghost. Similar to the Yurei, the Phantom has a significant effect on your Sanity, but only if you look at it. You can avoid it by using a photo camera on it, making it disappear forever. This, however, will only work if the ghost is in shadow form. If it is hunting, it will not stop it from attacking.',
    strength: 'Looking at the Phantom will reduce your sanity.',
    weakness: 'Scared of photos, capturing a photo will cause it to disappear, though not during a hunt.'
  },
  {
    name: 'Poltergeist',
    evidence: [EvidenceTypes.SpiritBox, EvidenceTypes.Freezing, EvidenceTypes.GhostOrbs],
    description: 'A Poltergeist is infamous for throwing objects around. It\'s important to note that this isn\'t the only ghost that will throw objects around but it is most well known for this. Because of this, the Poltergeist is almost powerless in an empty room.',
    strength: 'Throws multiple objects about at once.',
    weakness: 'Ineffective in an empty room as there will no objects to throw.'
  },
  {
    name: 'Banshee',
    evidence: [EvidenceTypes.Fingerprints, EvidenceTypes.Freezing, EvidenceTypes.EmfLevel5],
    description: 'Banshees are the ghosts that react the strongest to a Crucifix out of all the ghosts in the game. They will attempt to slowly stalk and pick off the ghost hunters one by one.',
    strength: 'Only targets one player at a time, giving them a really bad night.',
    weakness: 'Hates the Crucifix, making it especially effective.'
  },
  {
    name: 'Jinn',
    evidence: [EvidenceTypes.SpiritBox, EvidenceTypes.EmfLevel5, EvidenceTypes.GhostOrbs],
    description: 'A Jinn is a territorial Ghost that will attack when threatened. It has also been known to be able to travel at high speeds, and will do so while hunting distant paranormal investigators. However, cutting off a location\'s power via the breaker box will limit its speed.',
    strength: 'The Jinn moves faster the further away you are from it.',
    weakness: 'Cutting off the location’s power supply will limit the Jinn’s speed.'
  },
  {
    name: 'Mare',
    evidence: [EvidenceTypes.SpiritBox, EvidenceTypes.Freezing, EvidenceTypes.GhostOrbs],
    description: 'A Mare is a ghost that attacks primarily in the dark. Thus, keeping the lights on and remaining out of dark areas will lower its aggression, but beware as it will attempt to turn the lights off so it may hunt.',
    strength: 'Attacks more frequently in the dark, tends to switch off lights.',
    weakness: 'Turning the lights on around the Mare will lower its chance to attack.'
  },
  {
    name: 'Revenant',
    evidence: [EvidenceTypes.Fingerprints, EvidenceTypes.GhostWriting, EvidenceTypes.EmfLevel5],
    description: 'A Revenant is a ghost that can attack indiscriminately regardless of sanity levels when hunting. Hiding from the Revenant will cause it to move slowly, but will travel faster than any other ghost in the game if it\'s hunting a victim.',
    strength: 'Travels faster while hunting and attacks anyone, regardless of sanity levels.',
    weakness: 'Moves extremely slowly when players hide.'
  },
  {
    name: 'Shade',
    evidence: [EvidenceTypes.GhostWriting, EvidenceTypes.EmfLevel5, EvidenceTypes.GhostOrbs],
    description: 'A Shade is considered to be a "shy ghost.” It will not attack if there are multiple people nearby, but that also means it is harder to find in larger groups.',
    strength: 'Extremely shy, making it hard to find and detect.',
    weakness: 'Won’t hunt if players are in a group.'
  },
  {
    name: 'Demon',
    evidence: [EvidenceTypes.SpiritBox, EvidenceTypes.GhostWriting, EvidenceTypes.Freezing],
    description: 'A Demon is one of the worst ghosts to encounter. Highly aggressive, it will attack more often than any other ghost, so a crucifix is recommended to prevent hunts. However, it will also allow ghost hunters to use the Ouija Board without a major hit to their sanity.',
    strength: 'One of the most dangerous ghosts. Extremely aggressive with attacks.',
    weakness: 'Using the Ouija board to ask questions doesn’t drain sanity.'
  },
  {
    name: 'Yurei',
    evidence: [EvidenceTypes.GhostWriting, EvidenceTypes.Freezing, EvidenceTypes.GhostOrbs],
    description: 'A Yurei is a type of ghost that has the ability to drain the player\'s sanity quicker than any other ghost. Smudging the room the Yurei was found in will prevent it from wandering from the location for a long time.',
    strength: 'Stronger effect on people’s sanity.',
    weakness: 'Smudging the Yurei room will cause it to not wander around the location for a long time.'
  },
  {
    name: 'Oni',
    evidence: [EvidenceTypes.SpiritBox, EvidenceTypes.GhostWriting, EvidenceTypes.EmfLevel5],
    description: 'An Oni is a very active ghost and it’s likely that it will show itself within the first few minutes of the game. It’s also likely to wander around near the ghost room. It’s recommended to hide in a closet and wait for it to leave.',
    strength: 'Extremely active and moves objects quickly.',
    weakness: 'Extreme activity with lots of players nearby makes it easy to identify.'
  },
]
