const search = (list, word, param) => {
    word = word.toLocaleLowerCase();
    const listWithFilter = list.filter((item) => {
      const itemLowerCase = item[param].toLocaleLowerCase()
      const listWithWord = itemLowerCase.includes(word);
      if (listWithWord) {
        const fullName = item[param].split(' ');
        const fisrtName = fullName[0];

        if (fisrtName) {
          return true;
        }
        return false;
      }
      return listWithWord;
    });

    return listWithFilter;
};

module.exports = search;

