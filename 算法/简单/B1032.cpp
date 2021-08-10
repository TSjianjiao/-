//https://pintia.cn/problem-sets/994805260223102976/problems/994805289432236032
#include <iostream>
const int MAX = 10e5;
int list[MAX] = {0};
void B1032() {
	int n, code, score;
	printf("行数：");
	scanf_s("%d", &n);
	while(n--) {
		scanf_s("%d%d", &code, &score);
		list[code] += score;
	}

	int max = 0, maxCode = 0;
	for(int i = 0; i < MAX; i++) {
		int item = list[i];
		if(item <= 0) continue;
		max = max > item ? max : item;
	}
	printf("总分最高学校：%d %d", maxCode, max);
}