// http://tk.hustoj.com/problem.php?id=5901&csrf=quluNkBK8pvIVbJKXN7VvVvqAijfwSXQ
#include <iostream>
#include <string>
void TK5901() {
	char str[20] = {' '};
	//"abcde" "abcd"
	printf(" ‰»Î£∫");
	int i = 20;
	gets_s(str);
	int len = strlen(str);
	for(int i = 0; i < len / 2; i++) {
		if(str[i] != str[len - i - 1]) {
			printf("NO!");
			return;
		}
	}
	printf("YES!");

}