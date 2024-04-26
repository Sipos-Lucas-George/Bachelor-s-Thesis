interface UserSettingsInterface {
    income: number;
    level: number;
    individualOrHouseHold: number;
    essentials: number;
    debt: number;
    discretionary: number;
    savings: number;
    currency: string;
    setAll(income?: number, level?: number, individualOrHouseHold?: number, essentials?: number,
           debt?: number, discretionary?: number, savings?: number, currency?: string): void;
}

class UserSettings implements UserSettingsInterface {
    static instance: UserSettingsInterface;
    income: number = 0;
    level: number = 0;
    individualOrHouseHold: number = 0;
    essentials: number = 60;
    debt: number = 10;
    discretionary: number = 5;
    savings: number = 15;
    currency: string = "€";

    constructor() {
        if (UserSettings.instance) {
            return UserSettings.instance;
        }
        UserSettings.instance = this;
    }

    setAll(settings: any) {
        this.income = settings.income;
        this.level = settings.level;
        this.individualOrHouseHold = settings.individualOrHouseHold;
        this.essentials = settings.essentials;
        this.debt = settings.debt;
        this.discretionary = settings.discretionary;
        this.savings = settings.savings;
        this.currency = settings.currency;
    }
}

export const userSettings = new UserSettings();
