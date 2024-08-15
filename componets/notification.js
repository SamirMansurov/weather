

export function createNotifications() {
    const notificationContainer = document.createElement('div');
    notificationContainer.className = 'notification-container';

    const notificationHeader = document.createElement('div');
    notificationHeader.className = 'notification-header';

    const headerLine = document.createElement('div');
    headerLine.className = 'header-line';

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Your notification';

    notificationHeader.append(headerLine);
    notificationHeader.append(headerTitle);

    notificationContainer.append(notificationHeader);

    const notifications = [
        {
            time: "10 minutes ago",
            iconClass: "sun-icon",
            message: "A sunny day in your location, consider wearing your UV protection",
            isNew: true
        },
        {
            time: "1 day ago",
            iconClass: "cloud-icon",
            message: "A cloudy day will occur all day long, don't worry about the heat of the sun",
            isNew: false
        },
        {
            time: "2 days ago",
            iconClass: "rain-icon",
            message: "Potential for rain today is 84%, don't forget to bring your umbrella.",
            isNew: false
        }
    ];

    notifications.forEach(notification => {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = `notification ${notification.isNew ? 'new' : 'earlier'}`;

        const timeDiv = document.createElement('div');
        timeDiv.className = 'notification-time';

        const timeSpan = document.createElement('span');
        timeSpan.textContent = notification.time;
        timeDiv.append(timeSpan);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'notification-content';

        const iconSpan = document.createElement('span');
        iconSpan.className = `icon ${notification.iconClass}`;
        contentDiv.append(iconSpan);

        const messageP = document.createElement('p');
        messageP.innerHTML = `<strong>${notification.message}</strong>`;
        contentDiv.append(messageP);

        const dropdownIconSpan = document.createElement('span');
        dropdownIconSpan.className = 'dropdown-icon';
        dropdownIconSpan.textContent = '▾';
        contentDiv.append(dropdownIconSpan);

        notificationDiv.append(timeDiv);
        notificationDiv.append(contentDiv);

        notificationDiv.addEventListener('click', function() {
            this.classList.toggle('open');
            const messageP = this.querySelector('p');
            const dropdownIcon = this.querySelector('.dropdown-icon');

            if (this.classList.contains('open')) {
                messageP.style.display = 'block';
                dropdownIcon.style.transform = 'rotate(180deg)';
            } else {
                messageP.style.display = 'none';
                dropdownIcon.style.transform = 'rotate(0deg)';
            }
        });

        notificationContainer.append(notificationDiv);
    });

    document.body.append(notificationContainer);
}
