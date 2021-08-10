// https://pintia.cn/problem-sets/994805260223102976/problems/994805299301433344
#include <iostream>
#include <math.h>
// 转为10进制
int to10(int num, int p) {
	// 123
	// 1*10^2 + 2*10^1 + 3*10^0
	int res = 0;
	int i = 0;
	while(num) {
		res += num % 10 * pow(p, i++);
		num /= 10;
	}
	return res;
}
// 10转任意
void DecimaltoOther(int num, int p) {
	// 11/2 5 1
	// 5 /2 2 1
	// 2 /2 1 0
	// 1 /2 0 1   -> 1011
	int quotient = num, remainder = 1;
	int res[10] = {0};
	int i = 0;
	while(quotient)
	{
  		remainder = quotient % p;
		quotient /= p;
		res[i++] = remainder;
	}
	for(int i = 9; i >= 0; i--) {
		printf("%d", res[i]);
	}
}



void B1022() {
	printf("输入：");
	int a, b, p;
	scanf_s("%d%d%d", &a, &b, &p);
	/*
	*	转10
		123
		1*10^2 + 2*10^1 + 3*10^0
	*/
	/*
		10转任意
		11
		11/2 5 1
		5 /2 2 1
		2 /2 1 0
		1 /2 0 1
	*/
	int sum = a + b;
	int res[10] = {0};
	int index = 0;
	while(sum) {
		res[index++] = sum % p;
		sum /=  p;
	}
	for(int i = 9; i >= 0; i--) {
		printf("%d", res[i]);
	}
}