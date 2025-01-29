const generateButton = document.getElementById('generate');
        const secretKeyInput = document.getElementById('secret-key');
        const copyButton = document.getElementById('copy');
        const secretKey = generateSecretKey();

        function generateSecretKey() {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(-_=+)';
            let secretKey = '';
            for (let i = 0; i < 50; i++) {
                secretKey += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            return secretKey;
        }

        generateButton.addEventListener('click', function () {
            secretKeyInput.value = generateSecretKey();
        });

        copyButton.addEventListener('click', function () {
            secretKeyInput.select();
            document.execCommand('copy');
            alert('SECRET_KEY copiado com sucesso!');
        });