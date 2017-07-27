'use strict';
let path = require('path');
import B from './common.js';
export default {
    createCourse: function() {
        'use strict';
        it('createCourse', function() {
            // 进入创建页
            B.w();
            B.a().
            mouseMove($$('.menber-link').get(2)).
            perform();
            B.s(1);
            let newCourse = $$('.u-panel .card-sets').get(1).all(by.tagName('a')).get(1);
            newCourse.click();
            B.w();
            let I = {
                name: element(by.model('course.crs.title')),
                point: element(by.model('course.crs.credit')),
                time: element(by.model('course.crs.period')),
                people: element(by.model('course.crs.suitable'))
            };
            I.name.sendKeys('e2e-' + (+new Date()));
            I.point.sendKeys(1);
            I.time.sendKeys(10);
            I.people.sendKeys('小学生');
            // upload img
            let filePath = '../img/img-1.png',
                absPath = path.resolve(__dirname, filePath),
                upImg = element(by.id('upload-input-courseEdit'));
            console.log(absPath);
            browser.executeScript('$("#upload-input-courseEdit").show();');
            upImg.sendKeys(absPath);
            upImg.click();
            let upload = element(by.id('upload-img-courseEdit'));
            // .all(by.css('[ng-click="confirmImg()"]'))
            B.s(5);
            expect(upload.isDisplayed()).toBe(true);
            browser.executeScript('$("#upload-input-courseEdit").hide();');
            B.s(15);
        });
    },
}