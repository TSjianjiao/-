// http://tk.hustoj.com/problem.php?id=1934&csrf=p93K1MlWnDMrRTV6zggVqSBfOGp0lZKg
#include <iostream>
const int MAX = 200;
void TK1934() {
	int n, list[MAX] = {0}, searchValue, index = 0;
	printf(" ‰»Î£∫");
	scanf_s("%d", &n);
	while(index < n) {
		scanf_s("%d", &list[index++]);
	}
	printf(" ‰»Î£∫");
	scanf_s("%d", &searchValue);
	for(int i = 0; i < n; i++) {
		if(list[i] == searchValue) {
			printf("%d", n - i);
			break;
		}
	}
}