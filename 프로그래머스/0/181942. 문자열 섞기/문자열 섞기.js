function solution(str1, str2) {
    let list = str1.split("");
    let list2 = str2.split("");

    let result = [];

    list.forEach((e, i) => {
        result.push(e, list2[i]);
    });
    return (result.join(""));
}