import AnimatedElement from "../hooks&HOCs/AnimatedElement";

const people = [
    {
        name: 'Maryanne Jemide',
        role: 'Юрист / Основатель',
        imageUrl: '/p1.jpeg',
    },
    {
        name: 'Ирина Иванова',
        role: 'Маркетинговый аналитик / Специалист по продвижению',
        imageUrl: '/p2.jpeg',
    },
    {
        name: 'Александр Петров',
        role: 'HR-специалист / Специалист по трудоустройству',
        imageUrl: '/p3.jpeg',
    },
    {
        name: 'Дмитрий Васильев',
        role: 'Консультант / Специалист по клиентскому обслуживанию',
        imageUrl: '/p4.jpeg',
    },
    // More people...
]

export default function Team() {
    return (
        <div className="bg-white py-24 sm:py-32 min-h-screen mx-auto max-w-7xl" id="team">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
                <div>
                    <AnimatedElement direction="bottom">
                        <h2 className="text-4xl text-center font-bold tracking-tight text-slate-700 sm:text-5xl">
                            Встречайте нашу команду руководителей!</h2>
                    </AnimatedElement>
                    <AnimatedElement direction="static">
                        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl text-center mx-auto">
                            Приветствуем! Мы - эксперты по иммиграции и трудоустройству в Великобритании. Наша команда помогает получить разрешение на работу и успешно трудоустроиться. Наша цель - сделать процесс простым и эффективным для вас. Давайте вместе осуществим вашу мечту о карьере в Великобритании!
                        </p>
                    </AnimatedElement>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person, i) => (
                        <li key={i}>
                            <AnimatedElement direction={i % 2 ? 'right' : "left"}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full object-cover" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-cyan-600">{person.role}</p>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
