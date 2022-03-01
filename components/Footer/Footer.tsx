import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Image from '@/components/Image'
import Link from "next/link";

const flexItemsCenter: string = clsx('flex items-center')

const Footer = () => {
  const { t } = useTranslation('common');

  return (<footer className={clsx('w-full mx-auto')}>
    <div className=" bg-gray-50">
      <div
        className={`layout ${flexItemsCenter} justify-end py-3`}
      >
        <span className={clsx('mx-4')}>
          {t('incubated.by')}
        </span>

        <a href="https://code4.ro/ro/code-for-romania-war-task-force">
          <Image src={'/code_logo_colored.svg'} alt="Code 4 Romania logo" className="h-[42px]" />
        </a>
      </div>
    </div>
    <footer className="text-white bg-blue-950">
      <div className="layout grid py-12 gap-y-10 gap-x-6 lg:py-24 lg:grid-cols-2">
        <nav className="flex flex-wrap">
          <ul className="w-full md:w-1/2 md:px-3 md:py-0">
            <li className="mb-4 font-bold tracking-wide">
              {t('useful.links')}
            </li>

            <li><Link href="/despre-proiect" passHref><a>{t('about.project')}</a></Link></li>
            <li><a href="https://dopomoha.ro/">Dopomoha.ro</a></li>
            <li><a href="https://github.com/code4romania/war-support-sprijin-de-urgenta-client">{t('source.code')}</a></li>
          </ul>
          <ul className="w-full py-5 md:w-1/2 md:px-3 md:py-0">
            <li className="mb-4 font-bold tracking-wide">
              {t('legal.info')}
            </li>

            <ul>
              <li><Link href="/politica-de-confidentialitate" passHref><a>{t('confidentiality.policy')}</a></Link></li>
              <li><Link href="/politica-de-confidentialitate" passHref><a>{t('terms.and.conditions')}</a></Link></li>
            </ul>
          </ul>
        </nav>

        <div className="tracking-wide lg:text-right">
          <p>&copy; {new Date().getFullYear()} Code for Romania.</p>
          <p>{t('code4ro.description')}</p>
        </div>
      </div>
    </footer>
  </footer>);
};

export default Footer;