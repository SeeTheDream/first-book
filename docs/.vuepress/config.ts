import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'Listen ',
    description: 'Just playing around',
    port: 3002,
    themeConfig: {
        navbar: [{
            text: '前端',
            children: [
                {
                    text: 'vue',
                    link: '/frontend',
                },

            ]
        },
            {
                text: '后端',
                link: '/backend',
            },
            {
                text: 'Linux',
                children: [
                    {
                    text: 'Manjaro',
                    link: '/linux/manjaro',
                }
                ]
            },],
        logo: '/images/java.png',
    },
})