import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const IMG_TABLE = "https://cdn.poehali.dev/projects/87773617-f1e7-41b5-884c-32d065a00f8f/files/4fe6f3da-3e51-49a1-8754-e51d6c814104.jpg";
const IMG_BENCH = "https://cdn.poehali.dev/projects/87773617-f1e7-41b5-884c-32d065a00f8f/files/56123e53-c685-4de0-b148-2ddd73991174.jpg";
const IMG_SET = "https://cdn.poehali.dev/projects/87773617-f1e7-41b5-884c-32d065a00f8f/files/1a542373-fac4-4ccb-99e9-ac3973ad9709.jpg";
const IMG_COFFEE = "https://cdn.poehali.dev/projects/87773617-f1e7-41b5-884c-32d065a00f8f/files/fe05550f-dc63-4af7-a361-b3a76008f09f.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">ТАЙГА МЕБЕЛЬ</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                Каталог
              </a>
              <a href="#prices" className="text-muted-foreground hover:text-foreground transition-colors">
                Цены
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="Trees" className="w-3 h-3 mr-1" />
                    Мебель из сибирской сосны
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Сила тайги
                    <span className="text-primary block">в вашем доме</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Столы и лавочки из отборной сосны тайги — натуральное дерево, ручная работа, живой узор
                    каждого изделия. Мебель, которая служит десятилетиями.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('catalog')?.scrollIntoView({behavior:'smooth'})}>
                    Смотреть каталог
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" onClick={() => document.getElementById('prices')?.scrollIntoView({behavior:'smooth'})}>
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero сетка изображений */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img src={IMG_TABLE} alt="Стол из сосны" className="w-full h-full object-cover" />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden rounded-lg">
                <img src={IMG_BENCH} alt="Лавочка из тайги" className="w-full h-full object-cover" />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden rounded-lg">
                <img src={IMG_COFFEE} alt="Кофейный столик" className="w-full h-full object-cover" />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img src={IMG_SET} alt="Комплект мебели" className="w-full h-full object-cover" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ПОЧЕМУ ТАЙГА МЕБЕЛЬ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Каждое изделие — это живая история дерева, выросшего в суровых условиях сибирской тайги
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Hammer" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Ручная работа</h3>
              <p className="text-muted-foreground">
                Каждый стол и лавочка создаются вручную. Никакого массового производства — только мастерство и внимание к деталям.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Trees" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Живое дерево</h3>
              <p className="text-muted-foreground">
                Сосна из сибирской тайги — плотная, смолистая, долговечная. Натуральный рисунок делает каждое изделие уникальным.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Служит вечно</h3>
              <p className="text-muted-foreground">
                Таёжная сосна прочнее обычной на 30%. Мебель выдерживает годы ежедневной эксплуатации без потери красоты.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Каталог */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">КАТАЛОГ МЕБЕЛИ</h2>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              Заказать
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Стол обеденный большой */}
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src={IMG_TABLE}
                  alt="Стол обеденный из сосны"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Хит продаж</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Стол обеденный «Тайга»</h3>
                <p className="text-muted-foreground mb-4">Массив сосны, 200×90 см, толщина столешницы 6 см</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">28 000 ₽</div>
                  <Button size="sm">Заказать</Button>
                </div>
              </div>
            </Card>

            {/* Стол кофейный */}
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src={IMG_COFFEE}
                  alt="Кофейный столик"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  Новинка
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Стол кофейный «Кедр»</h3>
                <p className="text-muted-foreground mb-4">Массив сосны, 100×60 см, живой край</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">14 500 ₽</div>
                  <Button size="sm">Заказать</Button>
                </div>
              </div>
            </Card>

            {/* Лавочка со спинкой */}
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src={IMG_BENCH}
                  alt="Лавочка из сосны"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  Популярное
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Лавочка «Сибирь»</h3>
                <p className="text-muted-foreground mb-4">Массив сосны, 180 см, со спинкой или без</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">9 800 ₽</div>
                  <Button size="sm">Заказать</Button>
                </div>
              </div>
            </Card>

            {/* Стол обеденный малый */}
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/10 relative overflow-hidden">
                <img
                  src={IMG_TABLE}
                  alt="Стол малый"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Стол малый «Таёжный»</h3>
                <p className="text-muted-foreground mb-4">Массив сосны, 120×80 см, компактный</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">18 000 ₽</div>
                  <Button size="sm">Заказать</Button>
                </div>
              </div>
            </Card>

            {/* Лавочка малая */}
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/10 relative overflow-hidden">
                <img
                  src={IMG_BENCH}
                  alt="Лавочка малая"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Лавочка малая «Кедровка»</h3>
                <p className="text-muted-foreground mb-4">Массив сосны, 120 см, без спинки</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">6 500 ₽</div>
                  <Button size="sm">Заказать</Button>
                </div>
              </div>
            </Card>

            {/* Комплект */}
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src={IMG_SET}
                  alt="Комплект мебели"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Скидка 10%</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Комплект «Таёжный двор»</h3>
                <p className="text-muted-foreground mb-4">Стол 200×90 + 2 лавочки 180 см</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">38 000 ₽</div>
                    <div className="text-sm text-muted-foreground line-through">42 200 ₽</div>
                  </div>
                  <Button size="sm">Заказать</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Прайс-лист */}
      <section id="prices" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ПРАЙС-ЛИСТ</h2>
            <p className="text-xl text-muted-foreground">Все изделия из массива сибирской сосны, ручная работа</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Столы</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <div>
                    <div className="font-semibold">Стол обеденный малый</div>
                    <div className="text-sm text-muted-foreground">120×80 см</div>
                  </div>
                  <div className="text-lg font-bold">18 000 ₽</div>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <div>
                    <div className="font-semibold">Стол обеденный средний</div>
                    <div className="text-sm text-muted-foreground">160×90 см</div>
                  </div>
                  <div className="text-lg font-bold">23 000 ₽</div>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <div>
                    <div className="font-semibold">Стол обеденный большой</div>
                    <div className="text-sm text-muted-foreground">200×90 см</div>
                  </div>
                  <div className="text-lg font-bold">28 000 ₽</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Стол кофейный</div>
                    <div className="text-sm text-muted-foreground">100×60 см</div>
                  </div>
                  <div className="text-lg font-bold">14 500 ₽</div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Лавочки</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <div>
                    <div className="font-semibold">Лавочка малая</div>
                    <div className="text-sm text-muted-foreground">120 см, без спинки</div>
                  </div>
                  <div className="text-lg font-bold">6 500 ₽</div>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <div>
                    <div className="font-semibold">Лавочка средняя</div>
                    <div className="text-sm text-muted-foreground">150 см, без спинки</div>
                  </div>
                  <div className="text-lg font-bold">8 200 ₽</div>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <div>
                    <div className="font-semibold">Лавочка «Сибирь»</div>
                    <div className="text-sm text-muted-foreground">180 см, со спинкой</div>
                  </div>
                  <div className="text-lg font-bold">9 800 ₽</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Комплект: стол + 2 лавки</div>
                    <div className="text-sm text-muted-foreground">Скидка 10%</div>
                  </div>
                  <div className="text-lg font-bold text-primary">от 38 000 ₽</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Из глубины тайги — прямо к вам</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Мы делаем мебель из отборной сибирской сосны, которую заготавливаем в экологически чистых районах
                  тайги. Каждое бревно выдерживается не менее двух лет — дерево «дышит» и набирает прочность.
                </p>
                <p>
                  Наши мастера работают без конвейера: каждый стол и лавочка проходят через руки одного
                  мастера от начала до конца. Натуральные масла и воски — никакой химии.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">8 лет</div>
                  <div className="text-muted-foreground">На рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">1200+</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Натуральное дерево</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">14 дн.</div>
                  <div className="text-muted-foreground">Срок изготовления</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src={IMG_SET}
                  alt="Мастерская Тайга Мебель"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Хотите мебель из тайги у себя дома?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Оставьте заявку — рассчитаем стоимость, подберём размеры и покрытие.
            Доставка по всей России. Производство от 14 дней.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              Оставить заявку
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer id="contact" className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">ТАЙГА МЕБЕЛЬ</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Столы и лавочки из сибирской сосны ручной работы. Натуральное дерево,
                честные цены, доставка по всей России.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  WhatsApp
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>г. Красноярск</p>
                <p>ул. Лесная, 47</p>
                <p>Пн–Сб: 9:00 – 18:00</p>
                <p>+7 (391) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Столы обеденные</p>
                <p>Столы кофейные</p>
                <p>Лавочки</p>
                <p>Комплекты</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 Тайга Мебель. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
