// https://pintia.cn/problem-sets/994805260223102976/problems/994805325918486528
#include <iostream>
#define isOdd(n) (n % 2 == 0)

void B1001() {   
    int n;
    int count = 0;
    printf("请输入：");
    scanf_s("%d", &n);
    while(n > 1) {
        if(isOdd(n)) {
            n /= 2;
        }
        else {
            n = (3 * n + 1) / 2;
        }
        count++;
    }
    printf("需要 %d 步", count);
}