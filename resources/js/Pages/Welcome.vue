<script setup>
import {ref} from "vue";

const toggle = ref(true);
const hamburger = ref(false);
const handleLinkClick = () => {
    hamburger.value = !hamburger.value
}
</script>
<template>
    <header class="sticky top-0 z-50">
        <nav class="container flex justify-between items-center">
            <div class="py-5 text-color-secondary font-bold text-3xl">
                <a href="#home">
                    <span class="text-color-white">Трубы </span>ИЗОПРОФЛЕКС.
                </a>
            </div>
            <div>
                <ul class="hidden lg:flex items-center space-x-6">
                    <li><a href="#home" class="hover:text-color-secondary ease-in duration-200">Домой</a></li>
                    <li><a href="#features" class="hover:text-color-secondary ease-in duration-200">Наши
                        преимущества</a></li>
                    <li><a href="#testimonial" class="hover:text-color-secondary ease-in duration-200">Отзывы</a></li>
                    <li><a href="#pricing" class="hover:text-color-secondary ease-in duration-200">Цены</a></li>
                    <li><a href="#contact" class="hover:text-color-secondary ease-in duration-200">Контакты</a></li>
                </ul>
            </div>
            <!-- Mobile screen -->
            <div id="hamburger" class="lg:hidden cursor-pointer z-50">
                <i @click.prevent="hamburger = !hamburger" :class="[hamburger === false ? 'fa-solid fa-bars' : 'fa fa-times']"></i>
            </div>
            <div id="menu" :class="['bg-color-primary-dark h-[100vh]', hamburger === false ? 'hidden' : 'absolute inset-0']">
                <ul class="h-full grid place-items-center py-20">
                    <li><a href="#home" @click="handleLinkClick" class="hover:text-color-secondary ease-in duration-200">Домой</a></li>
                    <li><a href="#features" @click="handleLinkClick" class="hover:text-color-secondary ease-in duration-200">Наши преимущества</a></li>
                    <li><a href="#testimonial" @click="handleLinkClick" class="hover:text-color-secondary ease-in duration-200">Отзывы</a></li>
                    <li><a href="#pricing" @click="handleLinkClick" class="hover:text-color-secondary ease-in duration-200">Цены</a></li>
                    <li><a href="#contact" @click="handleLinkClick" class="hover:text-color-secondary ease-in duration-200">Контакты</a></li>
                    <li><button class="btn">Скачать каталог</button></li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <section id="home" class="relative">
            <div class="blob1"></div>
            <div class="blob2"></div>
            <div class="container py-20">
                <div class="flex flex-col items-center z-20 md:flex-row">
                    <div class="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                        <h1 class="title mb-4">Отличное приложение, чтобы купить трубы ИЗОПРОФЛЕКС</h1>
                        <p class="leading-relaxed mb-10">Изделия имеют многослойную конструкцию: напорная труба из
                            сшитого полиэтилена (PEX-a), теплоизоляция из полужёсткого пенополиуретана в защитной
                            полиэтиленовой оболочке.</p>
                        <button class="btn">Посмотреть каталог</button>
                    </div>
                    <div class="md:w-1/2">
                        <img src="/img/10731737.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section id="features" class="bg-color-primary-light">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Наши преимущества</h4>
                    <h1 class="title">Возможность оплатить через приложение</h1>
                </div>
                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                    <!-- card no 1 -->
                    <div
                        class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                        <div class="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                            <i class="fa-solid fa-calendar-days text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-bold py-4">Мониторинг заказов</h3>
                        <p class="leading-relaxed">Мы заботимся о наших клиентах, как о родной матери!</p>
                    </div>
                    <!-- card no 2 -->
                    <div
                        class="bg-color-primary-dark border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer">
                        <div class="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                            <i class="fa-solid fa-chart-column text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-bold py-4">Быстрая доставка</h3>
                        <p class="leading-relaxed">Мы заботимся о наших клиентах, как о родной матери!</p>
                    </div>
                    <!-- card no 3 -->
                    <div
                        class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                        <div class="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                            <i class="fa-solid fa-phone text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-bold py-4">Поддержка 24/24</h3>
                        <p class="leading-relaxed">Мы заботимся о наших клиентах, как о родной матери!</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="saving-money">
            <div class="container py-20 relative">
                <div class="blob1"></div>
                <div class="blob2"></div>
                <div class="flex flex-col items-center justify-between md:flex-row">
                    <div class="mb-12 md:w-1/2">
                        <img src="/img/sales.jpg" alt="">
                    </div>
                    <div class="text-center md:text-left md:w-1/2 md:ml-20">
                        <h4 class="font-bold text-color-secondary mb-4">Гибкая система скидок</h4>
                        <h1 class="title mb-4">Наши скидки самые скидочные!</h1>
                        <p class="leading-relaxed mb-10">Best financing app ever in the world. Easy to use and very user
                            friendly for mobile banking. You can control your card easily and send money some one just
                            one click.</p>
                        <button class="btn">Read More</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="how-it-works" class="bg-color-primary-light">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Как это работает</h4>
                    <h1 class="title">Как быстро сделать заказ</h1>
                </div>
                <div class="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                    <!-- card 1 -->
                    <div class="text-center cursor-pointer">
                        <div
                            class="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
                            <p class="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/img/line.png')] lg:after:absolute lg:after:top-4 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">
                                1</p>
                        </div>
                        <h3 class="text-xl font-bold py-4">Выберите продукцию</h3>
                        <p class="leading-relaxed">Мы заботимся о наших клиентах, как о родной матери!</p>
                    </div>
                    <!-- card 2 -->
                    <div class="text-center cursor-pointer">
                        <div class="relative inline-block px-6 py-3 rounded-lg cursor-pointer bg-color-secondary">
                            <p class="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/img/line-bottom.png')] lg:after:absolute lg:after:top-10 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">
                                2</p>
                        </div>
                        <h3 class="text-xl font-bold py-4">Свяжитесь с нашими барыгами</h3>
                        <p class="leading-relaxed">Мы заботимся о наших клиентах, как о родной матери!</p>
                    </div>
                    <!-- card 3 -->
                    <div class="text-center cursor-pointer">
                        <div
                            class="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
                            <p class="text-6xl">3</p>
                        </div>
                        <h3 class="text-xl font-bold py-4">Оцените наши преимущества!</h3>
                        <p class="leading-relaxed">Мы заботимся о наших клиентах, как о родной матери!</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="testimonial">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Отзывы</h4>
                    <h1 class="title">Что наши клиенты говорят о нас</h1>
                </div>
                <!-- review container -->
                <div class="mt-8">
                    <div class="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
                        <div class="user-text active-text">
                            <h4 class="font-bold text-color-secondary mb-1">Алексей Миллер</h4>
                            <p>Продавец газа</p>
                        </div>
                        <div class="user-text">
                            <p class="md:text-2xl mb-6">"Ребята нашли мне теплоизоляционные трубы по отличной цене!
                                Рекомендую!"</p>
                            <h4 class="font-bold text-color-secondary mb-1">Вадим Алекперов</h4>
                            <p>Продавец нефти</p>
                        </div>
                        <div class="user-text">
                            <p class="md:text-2xl mb-6">"Ребята нашли мне теплоизоляционные трубы по отличной цене!
                                Рекомендую!"</p>
                            <h4 class="font-bold text-color-secondary mb-1">Михаил Потанин</h4>
                            <p>Продавец алюминия</p>
                        </div>
                        <div class="user-text">
                            <p class="md:text-2xl mb-6">"Ребята нашли мне теплоизоляционные трубы по отличной цене!
                                Рекомендую!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="pricing" class="bg-color-primary-light">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Цены</h4>
                    <h1 class="title">Мы дадим вам лучшую цену!</h1>
                    <!-- Rounded switch -->
                    <div class="mt-5 flex items-center justify-center gap-4">
                        <p>При заказе до 10 тонн</p>
                        <label class="cursor-pointer relative inline-block w-20 h-8 rounded-full">
                            <input type="checkbox" id="toggleBtn" v-model="toggle" class="peer opacity-0 w-0 h-0">
                            <span
                                class="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
                        </label>
                        <p>При заказе от 10 тонн</p>
                    </div>
                </div>
                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <!-- card 1 -->
                    <div class="card relative h-auto w-auto">
                        <!-- front side -->
                        <div v-if="toggle" id="card_1_front"
                             class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    20<span class="text-sm font-normal tracking-widest">/за тонну</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">ИЗОПРОФЛЕКС ЛАЙТ</h3>
                                <p class="leading-relaxed">Для утепления</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                        <!-- back side -->
                        <div v-if="!toggle" id="card_1_back"
                             class="back px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    120<span class="text-sm font-normal tracking-widest">/за тонну</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">ИЗОПРОФЛЕКС ЛАЙТ</h3>
                                <p class="leading-relaxed">Для утепления</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                    </div>
                    <!-- card 2 -->
                    <div class="card relative h-auto w-auto">
                        <!-- front side -->
                        <div v-if="toggle" id="card_2_front"
                             class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    50<span class="text-sm font-normal tracking-widest">/за тонну</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">ИЗОПРОФЛЕКС СТАНДАРТ</h3>
                                <p class="leading-relaxed">Для ещё большего утепления</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                        <!-- back side -->
                        <div v-if="!toggle" id="card_2_back"
                             class="back px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    150<span class="text-sm font-normal tracking-widest">/за тонну</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">ИЗОПРОФЛЕКС СТАНДАРТ</h3>
                                <p class="leading-relaxed">Для ещё большего утепления</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                    </div>
                    <!-- card 3 -->
                    <div class="card relative h-auto w-auto">
                        <!-- front side -->
                        <div v-if="toggle" id="card_3_front"
                             class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    100<span class="text-sm font-normal tracking-widest">/за тонну</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">ИЗОПРОФЛЕКС СУПЕР</h3>
                                <p class="leading-relaxed">Для максимального утепления</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                        <!-- back side -->
                        <div v-if="!toggle" id="card_3_back"
                             class="back px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    500<span class="text-sm font-normal tracking-widest">/за тонну</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">ИЗОПРОФЛЕКС СУПЕР</h3>
                                <p class="leading-relaxed">Для максимального утепления</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Возникли вопросы?</h4>
                    <h1 class="title">Напишите нам</h1>
                </div>
                <form>
                    <div class="w-full m-auto text-center md:w-2/3">
                        <div class="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
                            <input type="text"
                                   class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                                   placeholder="Имя">
                            <input type="email"
                                   class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                                   placeholder="Email">
                            <input type="tel"
                                   class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                                   placeholder="Телефон">
                            <input type="text"
                                   class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                                   placeholder="Организация">
                        </div>
                        <textarea rows="4"
                                  class="text-color-primary-dark bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                                  placeholder="Текст сообщения"></textarea>
                        <button class="btn mt-10">Отправить сообщение</button>
                    </div>
                </form>
            </div>
        </section>
        <section id="footer">
            <div class="bg-color-primary-dark relative">
                <div class="container py-10">
                    <div class="grid gap-10 md:grid-cols-3 pb-10">
                        <div class="space-y-6">
                            <h4 class="font-bold text-lg">About App</h4>
                            <p class="leading-relaxed">This Should Be Used To Tell A Story And Include Any Testimonials
                                You Might Have About Your Product Or Service For Your Clients</p>
                            <div class="flex gap-5 items-center">
                                <p>Follow Us</p>
                                <i class="fa-brands fa-facebook-f cursor-pointer hover:text-color-secondary"></i>
                                <i class="fa-brands fa-twitter cursor-pointer hover:text-color-secondary"></i>
                                <i class="fa-brands fa-youtube cursor-pointer hover:text-color-secondary"></i>
                                <i class="fa-brands fa-instagram cursor-pointer hover:text-color-secondary"></i>
                            </div>
                        </div>
                        <div class="flex justify-between md:justify-around">
                            <div class="space-y-6">
                                <h4 class="font-bold text-lg">Быстрые ссылки</h4>
                                <ul class="space-y-3">
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#">Домой</a>
                                    </li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a
                                        href="#features">Наши преимущества</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a
                                        href="#testimonial">Testimonial</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a
                                        href="#pricing">Цены</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a
                                        href="#contact">Контакты</a></li>
                                </ul>
                            </div>
                            <div class="space-y-6">
                                <h4 class="font-bold text-lg">Помощь</h4>
                                <ul class="space-y-3">
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a href="#">О
                                        нас</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a
                                        href="#features">Партнёры</a></li>
                                    <li class="underline hover:no-underline hover:text-color-secondary"><a
                                        href="#contact">Помощь</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <h4 class="font-bold text-lg">Новостной портал</h4>
                            <p class="leading-relaxed">Подпишитесь на наши новости</p>
                            <div class="flex items-center">
                                <input type="text"
                                       class="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none"
                                       placeholder="Введите Email">
                                <button type="submit"
                                        class="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center pt-10 border-t border-color-gray">
                        <p>2023 &copy; Трубы. Все права зарезервированы.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
