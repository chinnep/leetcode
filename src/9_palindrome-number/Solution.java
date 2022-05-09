class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        int reverse = 0;
        int base = 10;
        int temp = x;
        
        while (temp > 0) {
            reverse=reverse * 10 + temp%base;
            temp = (temp - temp%base)/10;
        }
        return reverse == x;
    }
}
