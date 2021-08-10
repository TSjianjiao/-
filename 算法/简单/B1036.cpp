// https://pintia.cn/problem-sets/994805260223102976/problems/994805285812551680
#include <iostream>
const int MAX = 20;
void B1036() {
	int n;
	char c;
	printf("«Î ‰»Î£∫");
	scanf_s("%d %c", &n, &c, 2);
	int rows = 0;
	if(n % 2 == 0) {
		rows = n / 2;
	}
	else {
		rows = n / 2 + 1;
	}
	for(int i = 0; i < rows; i++) {
		if(i == 0) {
			for(int j = 0; j < n; j++) {
				printf("%c", c);
			}
			//printf("\n");
			printf("\n");
			continue;
		}

		if(i >= 1 && i < rows - 1) {
			for(int j = 0; j < n; j++) {
				if(j == 0 || j == n - 1) {
					printf("%c", c);
				}
				else {
					printf(" ");
				}
			}
			printf("\n");
			continue;
		}

		if(i == rows - 1) {
			for(int j = 0; j < n; j++) {
				printf("%c", c);
			}
			continue;
		}

	}
}