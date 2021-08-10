#include <iostream>
using namespace std;

// 平年、闰年月份
// 为了月份从一开始 0位置的元素不存
int month[13][2] = {
	{0, 0},
	{31, 31},
	{28, 29},
	{31, 31},
	{30, 30},
	{31, 31},
	{30, 30},
	{31, 31},
	{31, 31},
	{30, 30},
	{31, 31},
	{30, 30},
	{31, 31}
};

int isLeap(int year) {
	return (year % 4 == 0 && year % 100 == 0) || ( year % 400 == 0 );
}

// 获取日期 [年，月，日]
int* getDate(int date) {
	int d[3] = {0};
	d[0] = date / 10000;
	d[1] = date % 10000 / 100;
	d[2] = date % 100;
	return d;
}


void TK1928() {
	int time1, y1, m1, d1;
	int time2, y2, m2, d2;
	scanf_s("%d%d", &time1, &time2);
	// 保证小的在前面
	if(time1 > time2) {
		int temp = time2;
		time2 = time1;
		time1 = temp;
	}

	// 提取年月日
	/*
		注意这的顺序，由于函数执行结束后指针就被释放了
		所以必须马上使用，保存数组里的值，不然会被后面的调覆盖（应该是后面调用申请空间又复用的这块地）
	*/
	int* date1 = getDate(time1);
	y1 = date1[0];
	m1 = date1[1];
	d1 = date1[2];
	int* date2 = getDate(time2);
	y2 = date2[0];
	m2 = date2[1];
	d2 = date2[2];

	int count = 0;
	while(y1 < y2 || m1 < m2 || d1 < d2) {
		d1++;
		// 加一个月
		if(d1 == month[m1][isLeap(y1) + 1]) {
			d1 = 1;
			m1++;
		}
		// 加一年
		if(m1 == 13) {
			y1++;
			m1 = 1;
		}
		count++;
	}
	printf("相差%d天", count);
	
}