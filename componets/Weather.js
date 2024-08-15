export function createWeather() {
    const weatherContainer = document.createElement('div');
    weatherContainer.className = 'weather-container';

    const header = document.createElement('div');
    header.className = 'header';

    const backIcon = document.createElement('span');
    backIcon.className = 'back-icon';
    backIcon.textContent = '◁';

    const headerText = document.createElement('span');
    headerText.className = 'header-text';
    headerText.textContent = 'Back';

    const settingsIcon = document.createElement('span');
    settingsIcon.className = 'settings-icon';
    settingsIcon.textContent = '⚙️';

    header.append(backIcon);
    header.append(headerText);
    header.append(settingsIcon);

    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = 'Sep, 12';

    const today = document.createElement('div');
    today.className = 'today';
    today.textContent = 'Today';

    const forecast = document.createElement('div');
    forecast.className = 'forecast';

    const hours = [
        { temp: '29°C', iconClass: 'sun-cloud', time: '15.00' },
        { temp: '26°C', iconClass: 'sun-cloud', time: '16.00' },
        { temp: '24°C', iconClass: 'cloud', time: '17.00', selected: true },
        { temp: '23°C', iconClass: 'sun-cloud', time: '18.00' },
        { temp: '22°C', iconClass: 'sun-cloud', time: '19.00' }
    ];

    hours.forEach(hour => {
        const hourDiv = document.createElement('div');
        hourDiv.className = 'hour';
        if (hour.selected) {
            hourDiv.classList.add('selected');
        }

        const tempDiv = document.createElement('div');
        tempDiv.className = 'temp';
        tempDiv.textContent = hour.temp;

        const iconDiv = document.createElement('div');
        iconDiv.className = `icon ${hour.iconClass}`;

        const timeDiv = document.createElement('div');
        timeDiv.className = 'time';
        timeDiv.textContent = hour.time;

        hourDiv.append(tempDiv);
        hourDiv.append(iconDiv);
        hourDiv.append(timeDiv);

        forecast.append(hourDiv);
    });

    const nextForecast = document.createElement('div');
    nextForecast.className = 'next-forecast';

    const forecastHeader = document.createElement('div');
    forecastHeader.className = 'forecast-header';

    const nextForecastText = document.createElement('span');
    nextForecastText.textContent = 'Next Forecast';

    const calendarIcon = document.createElement('span');
    calendarIcon.className = 'calendar-icon';
    calendarIcon.textContent = '📅';

    forecastHeader.append(nextForecastText);
    forecastHeader.append(calendarIcon);

    const nextDays = [
        { date: 'Sep, 13', iconClass: 'thunderstorm', temp: '21°C' },
        { date: 'Sep, 14', iconClass: 'rain', temp: '22°C' }
    ];

    nextDays.forEach(day => {
        const nextDayDiv = document.createElement('div');
        nextDayDiv.className = 'next-day';

        const dateSpan = document.createElement('span');
        dateSpan.className = 'date';
        dateSpan.textContent = day.date;

        const iconDiv = document.createElement('div');
        iconDiv.className = `icon ${day.iconClass}`;

        const tempSpan = document.createElement('span');
        tempSpan.className = 'temp';
        tempSpan.textContent = day.temp;

        nextDayDiv.append(dateSpan);
        nextDayDiv.append(iconDiv);
        nextDayDiv.append(tempSpan);

        nextForecast.append(nextDayDiv);
    });

    nextForecast.append(forecastHeader);

    weatherContainer.append(header);
    weatherContainer.append(date);
    weatherContainer.append(today);
    weatherContainer.append(forecast);
    weatherContainer.append(nextForecast);

    document.body.append(weatherContainer);
}
