
        function isPalindrome(str) {
            // Remove non-alphanumeric characters and convert to lowercase
            str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

            // Compare the original string with its reverse
            return str === str.split('').reverse().join('');
        }

        function checkPalindrome() {
            var input = document.getElementById('input').value;
            var result = document.getElementById('result');

            if (isPalindrome(input)) {
                result.innerHTML = '"' + input + '" is a palindrome.';
            } else {
                result.innerHTML = 'No,' + " " + input + " "+ 'isn`t a palindrome!';
            }
        }