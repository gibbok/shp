# Magic Agenda Item (working prototype)

Online version visible here [XXXX][XXXX].

## Technology stack:
- JavaScript ES6 written in [Standard Style](https://standardjs.com/).
- [React](https://facebook.github.io/react/).
- [Redux](http://redux.js.org/).
- CSS 3 written using [BEM Methodology](https://en.bem.info/methodology/).

## Detailed use cases covered:
1. A user can create various agenda items by typing them and using enter keyboard for confirmation.

2. A user can add an order to the agenda item by typing a decimal number in the agenda item name, example: "6.1 Report". Agenda items will be ordered automatically by their order numbers.

3. A user automatically allocates all documents to the respective agenda items by clicking the "Add" button.
Allocation is executed by searching for the document name in the agenda item title or a leading number in agenda item order.

4. A user sees an animation (wow-effect) when documents are allocated. Agenda items with documents associated are highlighted in bold.

5. A user can see the total number of not allocated documents in the info text "Available documents (N)".

## Additional notes:
- Tested on the latest Chrome and Firefox browsers.
- Main logic visible in `reducer.js`.