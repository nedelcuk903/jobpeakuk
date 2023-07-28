/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/20/solid'
import AnimatedElement from '../hooks&HOCs/AnimatedElement';
import useSmoothScrollTo from '../hooks&HOCs/useSmoothScrollTo';
const workPermitOffers = [
    {
        title: 'Стандартное Разрешение на Работу',
        featured: false,
        description: 'Получите помощь в оформлении стандартного разрешения на работу в Великобритании.',
        priceMonthly: 250,
        mainFeatures: [
            { id: 1, value: 'Консультации по необходимой документации' },
            { id: 2, value: 'Проверка и подача заявки' },
            { id: 3, value: 'Регулярные обновления о статусе заявки' },
            { id: 4, value: 'Поддержка по электронной почте на протяжении процесса' },
        ],
    },
    {
        title: 'Виза для Внутреннего Трудового Перевода (ICT)',
        featured: true,
        description: 'Помощь в оформлении Визы для Внутреннего Трудового Перевода (ICT) для работы в Великобритании.',
        priceMonthly: 450,

        mainFeatures: [
            { id: 1, value: 'Оценка возможности получения визы ICT' },
            { id: 2, value: 'Подготовка необходимых заявочных форм' },
            { id: 3, value: 'Помощь в получении Сертификата Спонсора (CoS)' },
            { id: 4, value: 'Подача заявки и сопровождение уполномоченными органами Великобритании' },
            { id: 5, value: 'Экспертные советы по продлению визы и возможностям получения видов на жительство' },
        ],
    },
    {
        title: 'Спонсорство на Визу Типа Tier 2 (General)',
        featured: false,
        description: 'Обеспечьте себе спонсорство на Визу Типа Tier 2 (General) для работы в Великобритании.',
        priceMonthly: 350,

        mainFeatures: [
            { id: 1, value: 'Оценка возможности получения спонсорства Tier 2' },
            { id: 2, value: 'Подготовка необходимых документов' },
            { id: 3, value: 'Подача заявки в UKVI' },
            { id: 4, value: 'Консультации по проведению Resident Labour Market Test (RLMT)' },
            { id: 5, value: 'Личный менеджер для индивидуальной поддержки' },
        ],
    },

];


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const handleScrollClick = useSmoothScrollTo();

    return (
        <div className="bg-slate-200  min-h-screen" id='plans'>
            <div className="relative bg-cyan-600 ">
                {/* Overlapping background */}
                <div aria-hidden="true" className="absolute bottom-0 hidden h-6 w-full bg-slate-200 lg:block" />

                <AnimatedElement direction='right' once>
                    <div className="relative mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            <span className="block lg:inline">Простые тарифы,
                            </span>
                            <span className="block lg:inline">без обязательств.</span>
                        </h1>
                        <p className="mt-4 text-xl text-cyan-100">
                            Все, что вам нужно для получения разрешения на работу в Великобритании, ничего лишнего. Выберите план, который лучше всего соответствует вашим потребностям.
                        </p>
                    </div>
                </AnimatedElement>

                <h2 className="sr-only">Plans</h2>


                {/* Cards */}
                <div className="relative mx-auto mt-8 max-w-2xl px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
                    {/* Decorative background */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg bg-cyan-700 lg:block"
                    />

                    <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
                        {workPermitOffers.map((plan) => (
                            <div
                                key={plan.title}
                                className={classNames(
                                    plan.featured ? 'bg-white ring-2 ring-cyan-700 shadow-md' : 'bg-cyan-700 lg:bg-transparent',
                                    'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                                )}
                            >
                                <AnimatedElement direction='bottom' once>
                                    <>
                                        <div>
                                            <h3
                                                className={classNames(plan.featured ? 'text-cyan-600' : 'text-white', 'text-base font-semibold')}
                                            >
                                                {plan.title}
                                            </h3>
                                            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                                                <div className="mt-3 flex items-center">
                                                    <p
                                                        className={classNames(
                                                            plan.featured ? 'text-cyan-600' : 'text-white',
                                                            'text-4xl font-bold tracking-tight'
                                                        )}
                                                    >
                                                        ${plan.priceMonthly}
                                                    </p>
                                                    <div className="ml-4">
                                                        <p className={classNames(plan.featured ? 'text-gray-700 font-bold' : 'text-white', 'text-sm')}>
                                                            USD
                                                        </p>

                                                    </div>
                                                </div>
                                                <span
                                                    onClick={() => handleScrollClick('#form')}
                                                    className={classNames(
                                                        plan.featured
                                                            ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                                                            : 'bg-white text-cyan-600 hover:bg-cyan-50',
                                                        'cursor-pointer mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                                                    )}
                                                >
                                                    Подать заявку
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className="sr-only">Features</h4>
                                        <ul
                                            role="list"
                                            className={classNames(
                                                plan.featured
                                                    ? 'border-gray-200 divide-gray-200'
                                                    : 'border-cyan-500 divide-cyan-500 divide-opacity-75',
                                                'mt-7 border-t divide-y lg:border-t-0'
                                            )}
                                        >
                                            {plan.mainFeatures.map((mainFeature) => (
                                                <li key={mainFeature.id} className="flex items-center py-3">
                                                    <CheckIcon
                                                        className={classNames(
                                                            plan.featured ? 'text-cyan-500' : 'text-cyan-200',
                                                            'w-5 h-5 flex-shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    <span
                                                        className={classNames(
                                                            plan.featured ? 'text-gray-600' : 'text-white',
                                                            'ml-3 text-sm font-medium'
                                                        )}
                                                    >
                                                        {mainFeature.value}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                </AnimatedElement>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </div >
    )
}
