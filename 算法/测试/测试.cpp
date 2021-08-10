#include <iostream>


int main() {
	int list[14] = {22, 123, 43, 65, 11, 3, 89, 72, 23, 13, 54, 2, 4, 13};
	// n - 1趟
	for(int i = 0; i < 13; i++) {
		/*
			每一趟都从0开始，因为确定排序的元素会在最后
			每一排序完成都会少一个元素需要排序，i=0时时第一次，所以直接13-i
		*/
		for(int j = 0; j < 13 - i; j++) {
			if(list[j] > list[j + 1]) {
				int temp = list[j + 1];
				list[j + 1] = list[j];
				list[j] = temp;
			}
		}
	}
	for(int i = 0; i < 14; i++) {
		printf("%d,", list[i]);
	}
}



