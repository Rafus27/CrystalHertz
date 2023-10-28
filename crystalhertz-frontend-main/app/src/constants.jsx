// Icons
/**
 * TODO: Rechange icons to component & import from 1 file
 */
import accountIcon from "./assets/img/leftbar/user-icon.svg";
import musicIcon from "./assets/img/leftbar/music-icon.svg";
import subsIcon from "./assets/img/leftbar/subs-icon.svg";
import notifyIcon from "./assets/img/leftbar/notify-icon.svg";
import settingIcon from "./assets/img/leftbar/setting-icon.svg";
import questionIcon from "./assets/img/leftbar/questions-icon.svg";
import supportIcon from "./assets/img/leftbar/support-icon.svg";
/**
 * Descriptions...
 * @param key - Ключ объекта
 * @param label - Отображаемое имя объекта
 * @param status - Выбран ли объект
 * @param icon - Отображаемая иконкп для объекта
 * @param children - JSX.Element
 */
export const dataNavbar = [
    {
        key: "home",
        label: "Главная",
        status: false,
    },
    {
        key: "subscription",
        label: "Crystals+",
        status: false,
    },
    {
        key: "lib",
        label: "Библиотека",
        status: false,
    },
];
/**
 * Descriptions...
 * @param key - Ключ объекта
 * @param label - Отображаемое имя объекта
 * @param status - Выбран ли объект
 * @param icon - Отображаемая иконкп для объекта
 * @param children - JSX.Element in object
 */
export const dataLeftbarList = [
    {
        key: "account",
        label: "Аккаунт",
        status: false,
        icon: <img src={accountIcon} width={20} height={20}/>,
    },
    {
        key: "music",
        label: "Мои треки",
        status: false,
        icon: <img src={musicIcon} width={20} height={20}/>,
    },
    {
        key: "subscriptions",
        label: "Подписки",
        status: false,
        icon: <img src={subsIcon} width={20} height={20}/>,
    },
    {
        key: "notifications",
        label: "Уведомления",
        status: false,
        icon: <img src={notifyIcon} width={20} height={20}/>,
    },
    {
        key: "settings",
        label: "Настройки",
        status: false,
        icon: <img src={settingIcon} width={20} height={20}/>,
    },
];
export const dataLeftbarListFooter = [
    {
        key: "questions",
        label: "Questions / Ask",
        status: false,
        icon: <img src={questionIcon} width={20} height={20}/>,
    },
    {
        key: "support",
        label: "Support",
        status: false,
        icon: <img src={supportIcon} width={20} height={20}/>,
    },
];
/**
 * Descriptions...
 */
export const dataSettingButtonPage = [
    {
        key: "account_settings",
        label: "Аккаунт",
        isActive: false,
    },
    {
        key: "security_settings",
        label: "Безопасность",
        isActive: false,
    },
    {
        key: "blackList_settings",
        label: "Черный список",
        isActive: false,
    },
    {
        key: "payment_settings",
        label: "Платежные сервисы",
        isActive: false,
    },
];
/**
 * Descriptions...
 */
export const dataDefaultSortingValue = [
    {
        key: "listen",
        label: "Прослушивания",
    },
    {
        key: "rating",
        label: "Рейтинг",
    },
    {
        key: "release_date",
        label: "Дата выхода",
    },
];
export const subsTexts = {
    descsMsg: "Подписка CRYSTAL+ позволяет вашим творениям появляться на главной странице намного чаще (шанс появления на главной возрастает на 30%).",
    descsMsg2: "Новым слушателям становится проще узнать о вас как о творце, и воодушевиться для работы над своими проектами.",
    policyAgreeMsg: "Являясь всего лишь частью общей картины, сторонники тоталитаризма в науке, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут ограничены исключительно образом мышления. Наше дело не так однозначно, как может показаться: базовый вектор развития является качественно новой ступенью глубокомысленных рассуждений.",
};
