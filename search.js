const search = (list, word, param) => {
    word = word.toLocaleLowerCase();
    const listWithFilter = list.filter((item) => {
      const itemLowerCase = item[param].toLocaleLowerCase()
      const listWithWord = itemLowerCase.includes(word);
      if (listWithWord) {
        const fullName = item[param].split(' ');
        const firstName = fullName[0];

        if (firstName) {
          if (!word.includes(firstName[0])){
            return false;
	  }
	  return true;
        }
        return false;
      }
      return listWithWord;
    });

    return listWithFilter;
};

module.exports = search;

