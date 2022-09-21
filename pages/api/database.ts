import { AnswerModel as Answer } from "../../model/answer";
import { QuestionModel as Question } from "../../model/question";

export const questions: Record<number, Question> = {
  100: new Question({
    id: 100,
    text: "What is the name of Harry Potter’s mum?",
    answers: [
      Answer.correct("Lily"),
      Answer.incorrect("Poppy"),
      Answer.incorrect("Daisy"),
      Answer.incorrect("Cherry"),
    ],
  }),
  101: new Question({
    id: 101,
    text: "What is the 2nd Harry Potter book and movie called?",
    answers: [
      Answer.correct("Harry Potter and the Chamber of Secrets"),
      Answer.incorrect("Harry Potter and the Order of the Phoenix"),
      Answer.incorrect("Harry Potter and the Prizoner of Azkaban"),
      Answer.incorrect("Harry Potter and the Goblet of Fire"),
    ],
  }),
  102: new Question({
    id: 102,
    text: "What is the name of Ron’s sister?",
    answers: [
      Answer.correct("Ginny"),
      Answer.incorrect("Romilda"),
      Answer.incorrect("Pomona"),
      Answer.incorrect("Pansy"),
    ],
  }),
  103: new Question({
    id: 103,
    text: "In which city can you find the Warner Bros Harry Potter studios?",
    answers: [
      Answer.correct("London"),
      Answer.incorrect("Birmingham"),
      Answer.incorrect("Edinburgh"),
      Answer.incorrect("Glasgow"),
    ],
  }),
  104: new Question({
    id: 104,
    text: "Who was the Prisoner of Azkaban?",
    answers: [
      Answer.correct("Sirius Black"),
      Answer.incorrect("James Potter"),
      Answer.incorrect("Petter Pettigrew"),
      Answer.incorrect("Remus Lupin"),
    ],
  }),
  105: new Question({
    id: 105,
    text: "Who was not one of The Marauders?",
    answers: [
      Answer.correct("Severus Snape"),
      Answer.incorrect("James Potter"),
      Answer.incorrect("Petter Pettigrew"),
      Answer.incorrect("Remus Lupin"),
    ],
  }),
  106: new Question({
    id: 106,
    text: "What is the Leaky Cauldron?",
    answers: [
      Answer.correct("A pub"),
      Answer.incorrect("A wand shop"),
      Answer.incorrect("A bank"),
      Answer.incorrect("A joke shop"),
    ],
  }),
  107: new Question({
    id: 107,
    text: "In which country is the Beauxbatons Academy of Magic located?",
    answers: [
      Answer.correct("France"),
      Answer.incorrect("Romania"),
      Answer.incorrect("Germany"),
      Answer.incorrect("Ukraine"),
    ],
  }),
  108: new Question({
    id: 108,
    text: "Who was Bellatrix Lestrange the aunt of?",
    answers: [
      Answer.correct("Draco Malfoy"),
      Answer.incorrect("Neville Longbottom"),
      Answer.incorrect("Luna Lovegood"),
      Answer.incorrect("Hermione Granger"),
    ],
  }),
  109: new Question({
    id: 109,
    text: "What was Harry Potter’s pet?",
    answers: [
      Answer.correct("An owl"),
      Answer.incorrect("A cat"),
      Answer.incorrect("A toad"),
      Answer.incorrect("A dog"),
    ],
  }),
  110: new Question({
    id: 110,
    text: "Which one of Ron’s siblings does Fleur Delacour marry?",
    answers: [
      Answer.correct("Bill"),
      Answer.incorrect("George"),
      Answer.incorrect("Percy"),
      Answer.incorrect("Charlie"),
    ],
  }),
  111: new Question({
    id: 111,
    text: "Which actress portrayed Professor McGonagall in the movies?",
    answers: [
      Answer.correct("Maggie Smith"),
      Answer.incorrect("Bonnie Wright"),
      Answer.incorrect("Emma Watson"),
      Answer.incorrect("Helena Bonham Carter"),
    ],
  }),
  112: new Question({
    id: 112,
    text: "What creatures guard Azkaban?",
    answers: [
      Answer.correct("Dementors"),
      Answer.incorrect("Death Eaters"),
      Answer.incorrect("Goblins"),
      Answer.incorrect("Giants"),
    ],
  }),
  113: new Question({
    id: 113,
    text: "What is the name of the male house-elf who served the Malfoy family?",
    answers: [
      Answer.correct("Dobby"),
      Answer.incorrect("Rebeus"),
      Answer.incorrect("Remus"),
      Answer.incorrect("Gellert"),
    ],
  }),
  114: new Question({
    id: 114,
    text: "Which colour is associated with Dolores Umbridge?",
    answers: [
      Answer.correct("Pink"),
      Answer.incorrect("Orange"),
      Answer.incorrect("Purple"),
      Answer.incorrect("Red"),
    ],
  }),
};

// export const questions: Question[] = [
//   new Question({
//     id: 100,
//     text: "What is the name of Harry Potter’s mum?",
//     answers: [
//       Answer.correct("Lily"),
//       Answer.incorrect("Poppy"),
//       Answer.incorrect("Daisy"),
//       Answer.incorrect("Cherry"),
//     ],
//   }),
//   new Question({
//     id: 101,
//     text: "What is the 2nd Harry Potter book and movie called?",
//     answers: [
//       Answer.correct("Harry Potter and the Chamber of Secrets"),
//       Answer.incorrect("Harry Potter and the Order of the Phoenix"),
//       Answer.incorrect("Harry Potter and the Prizoner of Azkaban"),
//       Answer.incorrect("Harry Potter and the Goblet of Fire"),
//     ],
//   }),
//   new Question({
//     id: 102,
//     text: "What is the name of Ron’s sister?",
//     answers: [
//       Answer.correct("Ginny"),
//       Answer.incorrect("Romilda"),
//       Answer.incorrect("Pomona"),
//       Answer.incorrect("Pansy"),
//     ],
//   }),
//   new Question({
//     id: 103,
//     text:
//       "In which city can you find the Warner Bros Harry Potter studios?",
//     answers: [
//       Answer.correct("London"),
//       Answer.incorrect("Birmingham"),
//       Answer.incorrect("Edinburgh"),
//       Answer.incorrect("Glasgow"),
//     ],
//   }),
//   new Question({
//     id: 104,
//     text: "Who was the Prisoner of Azkaban?",
//     answers: [
//       new Answer({ value: "Sirius Black", isCorrect: true }),
//       new Answer({ value: "James Potter" }),
//       new Answer({ value: "Petter Pettigrew" }),
//       new Answer({ value: "Remus Lupin" }),
//     ],
//   }),
//   new Question({
//     id: 105,
//     text: "Who was not one of The Marauders?",
//     answers: [
//       new Answer({ value: "Severus Snape", isCorrect: true }),
//       new Answer({ value: "James Potter" }),
//       new Answer({ value: "Petter Pettigrew" }),
//       new Answer({ value: "Remus Lupin" }),
//     ],
//   }),
//   new Question({
//     id: 106,
//     text: "What is the Leaky Cauldron?",
//     answers: [
//       Answer.correct("A pub"),
//       Answer.incorrect("A wand shop"),
//       Answer.incorrect("A bank"),
//       Answer.incorrect("A joke shop"),
//     ],
//   }),
//   new Question({
//     id: 107,
//     text: "In which country is the Beauxbatons Academy of Magic located?",
//     answers: [
//       Answer.correct("France"),
//       Answer.incorrect("Romania"),
//       Answer.incorrect("Germany"),
//       Answer.incorrect("Ukraine"),
//     ],
//   }),
//   new Question({
//     id: 108,
//     text: "Who was Bellatrix Lestrange the aunt of?",
//     answers: [
//       Answer.correct("Draco Malfoy"),
//       Answer.incorrect("Neville Longbottom"),
//       Answer.incorrect("Luna Lovegood"),
//       Answer.incorrect("Hermione Granger"),
//     ],
//   }),
//   new Question({
//     id: 109,
//     text: "What was Harry Potter’s pet?",
//     answers: [
//       Answer.correct("An owl"),
//       Answer.incorrect("A cat"),
//       Answer.incorrect("A toad"),
//       Answer.incorrect("A dog"),
//     ],
//   }),
//   new Question({
//     id: 110,
//     text: "Which one of Ron’s siblings does Fleur Delacour marry?",
//     answers: [
//       Answer.correct("Bill"),
//       Answer.incorrect("George"),
//       Answer.incorrect("Percy"),
//       Answer.incorrect("Charlie"),
//     ],
//   }),
//   new Question({
//     id: 111,
//     text: "Which actress portrayed Professor McGonagall in the movies?",
//     answers: [
//       new Answer({ value: "Maggie Smith", isCorrect: true }),
//       new Answer({ value: "Bonnie Wright" }),
//       new Answer({ value: "Emma Watson" }),
//       new Answer({ value: "Helena Bonham Carter" }),
//     ],
//   }),
//   new Question({
//     id: 112,
//     text: "What creatures guard Azkaban?",
//     answers: [
//       Answer.correct("Dementors"),
//       Answer.incorrect("Death Eaters"),
//       Answer.incorrect("Goblins"),
//       Answer.incorrect("Giants"),
//     ],
//   }),
//   new Question({
//     id: 113,
//     text:
//       "What is the name of the male house-elf who served the Malfoy family?",
//     answers: [
//       Answer.correct("Dobby"),
//       Answer.incorrect("Rebeus"),
//       Answer.incorrect("Remus"),
//       Answer.incorrect("Gellert"),
//     ],
//   }),
//   new Question({
//     id: 114,
//     text: "Which colour is associated with Dolores Umbridge?",
//     answers: [
//       Answer.correct("Pink"),
//       Answer.incorrect("Orange"),
//       Answer.incorrect("Purple"),
//       Answer.incorrect("Red"),
//     ],
//   }),
// ];
