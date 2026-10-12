import {test, expect , Page} from '@playwright/test';

class registerPage {
    constructor(email:string , password:string){
        this.email=email;
        this.password=password;
        this
    }

    async navigateToRegisterPage(page: Page): Promise<void>{
       await page.goto('http://automationexercise.com');

    }
    async verifyHomePage(page: Page): Promise<void>{
        const pageUrl = page.url();
        expect(pageUrl).toBe("http://automationexercise.com/");
        await expect(page.locator(".logo")).toBeVisible();
    }

    async clickOnSignUPButton(page:Page): Promise<void>{
        await page.getByRole('link',{name:"Signup / Login"}).click();
        await page.waitForLoadState('networkidle')
        const url = page.url();
        expect(url).toBe("https://automationexercise.com/login");
    }
    async fillBasicDetails(name:string , email:string,page:Page): Promise<void>{
    await page.getByRole('textbox' , {name:"Name"}).click();
    await page.getByRole('textbox' , {name:"Name"}).fill(name);
    await page.locator('[data-qa="signup-email"]').fill(email);
    }
    




    async register(name:string , email:string ,password:string , confirmPassword:string , page: Page): Promise<void>{
       
    }
}
