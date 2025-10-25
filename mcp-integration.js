/**
 * MCP Integration Module for Smart Content Personalization
 * Handles weather-based themes, timezone greetings, location-based content, and dynamic styling
 */

class SmartPersonalization {
    constructor() {
        this.currentWeather = null;
        this.userLocation = null;
        this.userTimezone = null;
        this.themes = {
            sunny: {
                primary: '#FFD700',
                secondary: '#FF8C00',
                background: 'linear-gradient(135deg, #FFE5B4 0%, #FFCC70 100%)',
                accent: '#FF6B35'
            },
            rainy: {
                primary: '#4A90E2',
                secondary: '#2C5282',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                accent: '#5A67D8'
            },
            cloudy: {
                primary: '#718096',
                secondary: '#4A5568',
                background: 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)',
                accent: '#805AD5'
            },
            clear: {
                primary: '#38B2AC',
                secondary: '#319795',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                accent: '#4FD1C7'
            },
            night: {
                primary: '#2D3748',
                secondary: '#1A202C',
                background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                accent: '#9F7AEA'
            }
        };
        this.init();
    }

    async init() {
        await this.getUserLocation();
        await this.getWeatherData();
        this.setupTimezoneGreeting();
        this.applyWeatherTheme();
        this.setupLocationBasedContent();
        this.setupDynamicColors();
        
        // Update every 30 minutes
        setInterval(() => {
            this.getWeatherData();
            this.setupTimezoneGreeting();
        }, 30 * 60 * 1000);
    }

    async getUserLocation() {
        try {
            // Try to get user's location
            if (navigator.geolocation) {
                return new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            this.userLocation = {
                                lat: position.coords.latitude,
                                lon: position.coords.longitude
                            };
                            resolve(this.userLocation);
                        },
                        (error) => {
                            console.log('Location access denied, using IP-based location');
                            this.getLocationFromIP();
                            resolve(null);
                        }
                    );
                });
            } else {
                await this.getLocationFromIP();
            }
        } catch (error) {
            console.log('Using default location');
            this.userLocation = { lat: 40.7128, lon: -74.0060 }; // Default to NYC
        }
    }

    async getLocationFromIP() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            this.userLocation = {
                lat: data.latitude,
                lon: data.longitude,
                city: data.city,
                country: data.country_name,
                timezone: data.timezone
            };
            this.userTimezone = data.timezone;
        } catch (error) {
            console.log('IP location failed, using default');
            this.userLocation = { lat: 40.7128, lon: -74.0060 };
        }
    }

    async getWeatherData() {
        if (!this.userLocation) return;

        try {
            // Using OpenWeatherMap API (you'll need to get a free API key)
            const API_KEY = 'demo_key'; // Replace with actual API key
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.userLocation.lat}&lon=${this.userLocation.lon}&appid=${API_KEY}`;
            
            // For demo purposes, we'll simulate weather data
            this.simulateWeatherData();
        } catch (error) {
            console.log('Weather API failed, using simulated data');
            this.simulateWeatherData();
        }
    }

    simulateWeatherData() {
        const hour = new Date().getHours();
        const weatherConditions = ['sunny', 'rainy', 'cloudy', 'clear'];
        
        // Simulate weather based on time of day
        if (hour >= 6 && hour <= 18) {
            const randomWeather = weatherConditions[Math.floor(Math.random() * 3)];
            this.currentWeather = {
                condition: randomWeather,
                temperature: Math.floor(Math.random() * 30) + 10,
                description: this.getWeatherDescription(randomWeather)
            };
        } else {
            this.currentWeather = {
                condition: 'night',
                temperature: Math.floor(Math.random() * 20) + 5,
                description: 'Clear night'
            };
        }
    }

    getWeatherDescription(condition) {
        const descriptions = {
            sunny: 'Bright and sunny',
            rainy: 'Light rain',
            cloudy: 'Partly cloudy',
            clear: 'Clear skies',
            night: 'Clear night'
        };
        return descriptions[condition] || 'Pleasant weather';
    }

    applyWeatherTheme() {
        if (!this.currentWeather) return;

        const theme = this.themes[this.currentWeather.condition];
        const root = document.documentElement;

        // Apply CSS custom properties
        root.style.setProperty('--weather-primary', theme.primary);
        root.style.setProperty('--weather-secondary', theme.secondary);
        root.style.setProperty('--weather-background', theme.background);
        root.style.setProperty('--weather-accent', theme.accent);

        // Add weather class to body
        document.body.className = document.body.className.replace(/weather-\w+/g, '');
        document.body.classList.add(`weather-${this.currentWeather.condition}`);

        // Update weather indicator
        this.updateWeatherIndicator();
    }

    updateWeatherIndicator() {
        const weatherIndicator = document.getElementById('weather-indicator');
        if (weatherIndicator && this.currentWeather) {
            weatherIndicator.innerHTML = `
                <div class="weather-info">
                    <span class="weather-icon">${this.getWeatherIcon(this.currentWeather.condition)}</span>
                    <span class="weather-temp">${this.currentWeather.temperature}°C</span>
                    <span class="weather-desc">${this.currentWeather.description}</span>
                </div>
            `;
        }
    }

    getWeatherIcon(condition) {
        const icons = {
            sunny: '☀️',
            rainy: '🌧️',
            cloudy: '☁️',
            clear: '🌤️',
            night: '🌙'
        };
        return icons[condition] || '🌤️';
    }

    setupTimezoneGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting = '';
        let timeEmoji = '';

        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning';
            timeEmoji = '🌅';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good Afternoon';
            timeEmoji = '☀️';
        } else if (hour >= 17 && hour < 21) {
            greeting = 'Good Evening';
            timeEmoji = '🌆';
        } else {
            greeting = 'Good Night';
            timeEmoji = '🌙';
        }

        // Add location info if available
        let locationText = '';
        if (this.userLocation && this.userLocation.city) {
            locationText = ` from ${this.userLocation.city}`;
        }

        const greetingElement = document.getElementById('dynamic-greeting');
        if (greetingElement) {
            greetingElement.innerHTML = `
                <span class="greeting-emoji">${timeEmoji}</span>
                <span class="greeting-text">${greeting}${locationText}!</span>
                <span class="greeting-time">${now.toLocaleTimeString()}</span>
            `;
        }
    }

    setupLocationBasedContent() {
        if (!this.userLocation) return;

        // Simulate location-based project recommendations
        const projects = this.getLocationBasedProjects();
        const projectContainer = document.getElementById('location-projects');
        
        if (projectContainer && projects.length > 0) {
            projectContainer.innerHTML = `
                <h3>Recommended Projects for Your Region</h3>
                <div class="location-projects-grid">
                    ${projects.map(project => `
                        <div class="location-project-card">
                            <h4>${project.title}</h4>
                            <p>${project.description}</p>
                            <span class="project-relevance">${project.relevance}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    getLocationBasedProjects() {
        // This would typically fetch from a database or API
        const allProjects = [
            {
                title: 'Weather Analytics Dashboard',
                description: 'Real-time weather data visualization for your region',
                relevance: 'Relevant to your current weather conditions',
                regions: ['all']
            },
            {
                title: 'Local Business Finder',
                description: 'ML-powered local business recommendation system',
                relevance: 'Perfect for your city',
                regions: ['urban']
            },
            {
                title: 'Traffic Optimization AI',
                description: 'Smart traffic flow analysis for metropolitan areas',
                relevance: 'Ideal for busy cities',
                regions: ['urban']
            }
        ];

        return allProjects.filter(project => 
            project.regions.includes('all') || 
            (this.userLocation && this.userLocation.city && project.regions.includes('urban'))
        );
    }

    setupDynamicColors() {
        // Create dynamic color scheme based on time and weather
        const hour = new Date().getHours();
        const baseHue = this.getTimeBasedHue(hour);
        const weatherModifier = this.getWeatherColorModifier();

        const dynamicColors = {
            primary: `hsl(${baseHue + weatherModifier}, 70%, 50%)`,
            secondary: `hsl(${baseHue + weatherModifier + 30}, 60%, 45%)`,
            accent: `hsl(${baseHue + weatherModifier + 60}, 80%, 55%)`
        };

        // Apply dynamic colors to specific elements
        this.applyDynamicColors(dynamicColors);
    }

    getTimeBasedHue(hour) {
        // Map hours to color hues (0-360)
        return (hour * 15) % 360; // Changes every hour
    }

    getWeatherColorModifier() {
        if (!this.currentWeather) return 0;
        
        const modifiers = {
            sunny: 30,    // Warmer colors
            rainy: -30,   // Cooler colors
            cloudy: 0,    // Neutral
            clear: 15,    // Slightly warm
            night: -45    // Much cooler
        };
        
        return modifiers[this.currentWeather.condition] || 0;
    }

    applyDynamicColors(colors) {
        const root = document.documentElement;
        root.style.setProperty('--dynamic-primary', colors.primary);
        root.style.setProperty('--dynamic-secondary', colors.secondary);
        root.style.setProperty('--dynamic-accent', colors.accent);
    }
}

// Initialize smart personalization when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.smartPersonalization = new SmartPersonalization();
});