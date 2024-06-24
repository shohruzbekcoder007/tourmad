import { Trans } from 'react-i18next';
import { useAppDispatch } from '../../redux/hooks';
import { changeLanguage } from '../../redux/slices/i18nSlice';
import { useEffect, useState } from 'react';

function LanguageSelect() {

    const dispatch = useAppDispatch()
    const [language, setLanguage] = useState<any>("")
    const handleChangeLanguage = (event: any) => {
        setLanguage(event.target.value);
        dispatch(changeLanguage(event.target.value))
    };
    useEffect(() => {
      setLanguage(localStorage.getItem("i18nextLng"))
    }, [])
  return (
    <select value={language === "" ? "en-GB" : language} onChange={handleChangeLanguage}>
      <option value="uz-GB">
        <Trans i18nKey="uzbek">Uzbek</Trans>
      </option>
      <option value="en-GB">
        <Trans i18nKey="english">English</Trans>
      </option>
      <option value="ru-GB">
        <Trans i18nKey="russian">Russian</Trans>
      </option>
    </select>
  );
}
export default LanguageSelect