import { DropdownMenu } from "./sub/SubDropdownMenu.component";
/**
 * Children to Subscription modal [choosePlan]
 * @returns {JSX.Element}
 */
export const ChoosePlan = () => {
    const menuItems = [
        "Выберите платежный план",
        "1 месяц",
        "3 месяца",
        "6 месяцев",
        "12 месяцев",
    ];
    return <DropdownMenu items={menuItems}/>;
};
