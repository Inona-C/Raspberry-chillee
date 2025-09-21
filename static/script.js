document.addEventListener('DOMContentLoaded', function() {
    // 模擬數據更新
    function updateSensorData() {
        const temperature = (Math.random() * 10 + 20).toFixed(1); // 20.0 - 30.0
        const humidity = (Math.random() * 30 + 50).toFixed(0); // 50 - 80

        document.getElementById('temperature').textContent = `${temperature} °C`;
        document.getElementById('humidity').textContent = `${humidity} %`;

        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('temp-last-updated').textContent = timeString;
        document.getElementById('hum-last-updated').textContent = timeString;
        document.getElementById('door-window-last-updated').textContent = timeString;
    }

    // 模擬燈光控制
    document.getElementById('toggle-light').addEventListener('click', function() {
        const lightStatus = document.getElementById('light-status');
        const currentStatus = lightStatus.textContent;
        if (currentStatus === '關閉') {
            lightStatus.textContent = '開啟';
            this.classList.remove('btn-success');
            this.classList.add('btn-danger');
        } else {
            lightStatus.textContent = '關閉';
            this.classList.remove('btn-danger');
            this.classList.add('btn-success');
        }
        document.getElementById('light-last-updated').textContent = new Date().toLocaleTimeString();
    });

    // 模擬風扇控制
    document.getElementById('toggle-fan').addEventListener('click', function() {
        const fanStatus = document.getElementById('fan-status');
        const currentStatus = fanStatus.textContent;
        if (currentStatus === '關閉') {
            fanStatus.textContent = '開啟';
            this.classList.remove('btn-primary');
            this.classList.add('btn-danger');
        } else {
            fanStatus.textContent = '關閉';
            this.classList.remove('btn-danger');
            this.classList.add('btn-primary');
        }
        document.getElementById('fan-last-updated').textContent = new Date().toLocaleTimeString();
    });

    // 模擬警報系統控制
    document.getElementById('toggle-alarm').addEventListener('click', function() {
        const alarmStatus = document.getElementById('alarm-status');
        const currentStatus = alarmStatus.textContent;
        if (currentStatus === '已解除') {
            alarmStatus.textContent = '已布防';
            alarmStatus.classList.remove('text-danger');
            alarmStatus.classList.add('text-success');
            this.classList.remove('btn-warning');
            this.classList.add('btn-success');
        } else {
            alarmStatus.textContent = '已解除';
            alarmStatus.classList.remove('text-success');
            alarmStatus.classList.add('text-danger');
            this.classList.remove('btn-success');
            this.classList.add('btn-warning');
        }
        document.getElementById('alarm-last-updated').textContent = new Date().toLocaleTimeString();
    });

    // 每 5 秒更新一次感測器數據
    setInterval(updateSensorData, 5000);
    updateSensorData(); // 首次載入時立即更新
});
