def anagrams_for(word, list_of_words):
	result = []
	string1 = word.upper()
	arr1 = list(''.join(string1.split(' ')))
	arr1.sort()
	for i in range(0, len(list_of_words)):
		string2 = list_of_words[i].lower()
		arr2 = list(''.join(string2.split(' ')))
		arr2.sort()
		if (len(arr1) != len(arr2)):
			continue
		for j in range(0, len(arr1)):
			if (arr1[j] != arr2[j]):
				continue
		result.append(list_of_words[i])
	return(result)