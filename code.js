function permutationSort(a) {
    var count = 0;
    var permutations = getPermutations(a);

    console.log("orig input: " + a);

    if (permutations.length <= 1) {
        console.log("It took " + count + " permutations to find the sorted list");
        return permutations;
    }

    //Checks each permutation to see if it's sorted.
    for (var i = 0; i < permutations.length; i++) {
        if (!isSorted(permutations[i])) {
            count++;
        } else {
            console.log("It took " + count + " permutations tries to find the sorted list: " + permutations[i]);
            return permutations[i];
        }
    }
}

function isSorted(a) {
    if (a.length == 1) {
        return true;
    }

    //Compares ith element to i - 1 element. It should be 
    //smaller if it's sorted but if it's bigger, return false
    //as one element is at least out of place.
    for (var i = 1; i < a.length; i++) {
        if (a[i - 1] > a[i]) {
            return false
        }
    }

    return true;
}


function getPermutations(a) {
    var result = [];

    //Base cases
    if (a.length == 0) {
        return [];
    }
    if (a.length == 1) {
        return [a]
    }

    for (var i = 0; i < a.length; i++) {
        //Take one num in the array
        const currNum = a[i];

        //Get all numbers except currNum
        var remainingNums = a.slice(0, i).concat(a.slice(i + 1));

        //Recursive call
        var remainingNumsPermutated = getPermutations(remainingNums);

        //Account for elements left
        for (var j = 0; j < remainingNumsPermutated.length; j++) {
            var permutedArray = [currNum].concat(remainingNumsPermutated[j]);
            result.push(permutedArray);
        }
    }
    return result;
}