import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Производство и монтаж</Badge>,
    title: "Промышленные ангары под ключ.",
    showButton: true,
    buttonText: 'Получить расчёт'
  },
  {
    id: 'about',
    title: 'Надёжные решения для бизнеса',
    content: 'Проектируем и строим промышленные ангары любой сложности. Полный цикл работ: от разработки проекта до ввода объекта в эксплуатацию.'
  },
  {
    id: 'features',
    title: 'Наши преимущества',
    content: 'Быстрый монтаж — от 2 недель. Собственное производство металлоконструкций. Гарантия качества и соблюдение сроков. Технический надзор на всех этапах.'
  },
  {
    id: 'process',
    title: 'Этапы работы',
    content: 'Полный цикл строительства от идеи до сдачи объекта',
    steps: [
      { icon: 'ClipboardList', title: 'Консультация', description: 'Обсуждение требований и выезд на объект' },
      { icon: 'Ruler', title: 'Проектирование', description: 'Разработка проекта и сметы' },
      { icon: 'Factory', title: 'Производство', description: 'Изготовление металлоконструкций' },
      { icon: 'Truck', title: 'Доставка', description: 'Логистика на объект' },
      { icon: 'Wrench', title: 'Монтаж', description: 'Сборка каркаса и обшивка' },
      { icon: 'ClipboardCheck', title: 'Сдача объекта', description: 'Приёмка работ и документация' }
    ]
  },
  {
    id: 'testimonials',
    title: 'Реализованные проекты',
    content: 'Более 150 построенных объектов: складские комплексы, производственные цеха, логистические центры. География работы — вся Россия.',
    gallery: [
      {
        url: 'https://cdn.poehali.dev/projects/c87efcba-671c-4d6b-a076-fe0696a1ced1/files/221ff69f-241b-4265-b694-b27eed1f5b65.jpg',
        title: 'Складской комплекс'
      },
      {
        url: 'https://cdn.poehali.dev/projects/c87efcba-671c-4d6b-a076-fe0696a1ced1/files/5adb694a-6a5f-45a9-9e12-f7c5b278edd6.jpg',
        title: 'Производственный цех'
      },
      {
        url: 'https://cdn.poehali.dev/projects/c87efcba-671c-4d6b-a076-fe0696a1ced1/files/3aabe082-6e3a-4101-8850-76dc25f78dd3.jpg',
        title: 'Логистический центр'
      }
    ]
  },
  {
    id: 'join',
    title: 'Начните строительство',
    content: 'Готовы построить надёжный промышленный ангар? Оставьте заявку, и наш инженер свяжется с вами для расчёта стоимости и сроков.',
    showButton: true,
    buttonText: 'Заказать расчёт'
  },
]