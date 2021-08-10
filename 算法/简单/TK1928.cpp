#include <iostream>
using namespace std;

// ƽ�ꡢ�����·�
// Ϊ���·ݴ�һ��ʼ 0λ�õ�Ԫ�ز���
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

// ��ȡ���� [�꣬�£���]
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
	// ��֤С����ǰ��
	if(time1 > time2) {
		int temp = time2;
		time2 = time1;
		time1 = temp;
	}

	// ��ȡ������
	/*
		ע�����˳�����ں���ִ�н�����ָ��ͱ��ͷ���
		���Ա�������ʹ�ã������������ֵ����Ȼ�ᱻ����ĵ����ǣ�Ӧ���Ǻ����������ռ��ָ��õ����أ�
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
		// ��һ����
		if(d1 == month[m1][isLeap(y1) + 1]) {
			d1 = 1;
			m1++;
		}
		// ��һ��
		if(m1 == 13) {
			y1++;
			m1 = 1;
		}
		count++;
	}
	printf("���%d��", count);
	
}