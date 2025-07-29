import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ForumPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const posts = [
    {
      id: 1,
      title: "Кто-нибудь видел Кирилла Петракова на прошлой неделе?",
      author: "u/mystery_user",
      timeAgo: "2 часа назад",
      upvotes: 127,
      downvotes: 8,
      comments: 23,
      content: "Встретил Кирилла Петракова в торговом центре, выглядел очень подозрительно. Что-то скрывает точно... Этот Петраков явно что-то замышляет!",
      category: "discussions"
    },
    {
      id: 2,
      title: "СРОЧНО: Новые факты о Кирилле Петракове!",
      author: "u/investigator_pro",
      timeAgo: "4 часа назад",
      upvotes: 89,
      downvotes: 12,
      comments: 34,
      content: "Ребята, я нашёл старые фотографии Кирилла Петракова в архивах школы. Не поверите что там... Петраков был совсем другим!",
      category: "discussions"
    },
    {
      id: 3,
      title: "Странные привычки Кирилла Петракова",
      author: "u/observer123",
      timeAgo: "6 часов назад",
      upvotes: 156,
      downvotes: 5,
      comments: 67,
      content: "Каждый день в одно и то же время Кирилл Петраков заходит в тот же магазин. Покупает одно и то же. Подозрительно... Что скрывает этот Петраков?",
      category: "discussions"
    },
    {
      id: 4,
      title: "Мой опыт общения с Кириллом Петраковым",
      author: "u/former_friend",
      timeAgo: "8 часов назад",
      upvotes: 203,
      downvotes: 15,
      comments: 89,
      content: "Знал Кирилла Петракова лично. Расскажу всё как есть - Петраков не тот, кем кажется... Этот Кирилл меня разочаровал.",
      category: "comments"
    },
    {
      id: 5,
      title: "Редкие фотографии Кирилла Петракова из детства",
      author: "u/photo_hunter",
      timeAgo: "1 день назад",
      upvotes: 312,
      downvotes: 7,
      comments: 45,
      content: "Нашёл в семейном архиве фото маленького Кирилла Петракова. Посмотрите на эти глаза... Уже тогда Петраков был странным!",
      category: "photos"
    }
  ];

  const filteredPosts = posts.filter(post => {
    if (activeTab === 'discussions') return post.category === 'discussions';
    if (activeTab === 'comments') return post.category === 'comments';
    if (activeTab === 'photos') return post.category === 'photos';
    return true;
  });

  const PostCard = ({ post }: { post: typeof posts[0] }) => (
    <Card className="bg-reddit-cardBg border-reddit-border hover:shadow-md transition-all duration-200 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex gap-3">
          {/* Vote section */}
          <div className="flex flex-col items-center space-y-1 min-w-[40px]">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 p-0 text-reddit-textSecondary hover:text-reddit-upvote hover:bg-reddit-upvote/10"
            >
              <Icon name="ChevronUp" size={20} />
            </Button>
            <span className="text-sm font-medium text-reddit-textPrimary">
              {post.upvotes - post.downvotes}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 p-0 text-reddit-textSecondary hover:text-reddit-downvote hover:bg-reddit-downvote/10"
            >
              <Icon name="ChevronDown" size={20} />
            </Button>
          </div>

          {/* Content section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">
                r/kirill_petrakov_watch
              </Badge>
              <span className="text-xs text-reddit-textSecondary">
                Опубликовано {post.author} • {post.timeAgo}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-reddit-textPrimary mb-2 hover:text-reddit-orange cursor-pointer">
              {post.title}
            </h3>
            
            <p className="text-reddit-textSecondary text-sm mb-3 leading-relaxed">
              {post.content}
            </p>

            <div className="flex items-center gap-4 text-reddit-textSecondary text-sm">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-3 hover:bg-reddit-lightGray"
              >
                <Icon name="MessageCircle" size={16} className="mr-1" />
                {post.comments} комментариев
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-3 hover:bg-reddit-lightGray"
              >
                <Icon name="Share" size={16} className="mr-1" />
                Поделиться
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-3 hover:bg-reddit-lightGray"
              >
                <Icon name="Bookmark" size={16} className="mr-1" />
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-reddit-lightGray relative">
      {/* Background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/bc29f8f7-b8b6-45c7-ad1a-404f40e4079c.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(50%) blur(1px)'
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-reddit-cardBg border-b border-reddit-border sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-reddit-orange rounded-full flex items-center justify-center">
                    <Icon name="Users" size={18} className="text-white" />
                  </div>
                  <h1 className="text-xl font-bold text-reddit-textPrimary">
                    Кирилл Петраков Forum
                  </h1>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Icon name="Plus" size={16} className="mr-1" />
                  Создать пост
                </Button>
                <div className="w-8 h-8 bg-reddit-textSecondary rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-reddit-cardBg border-reddit-border sticky top-24">
                <CardHeader>
                  <h2 className="text-lg font-semibold text-reddit-textPrimary">
                    О сообществе
                  </h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-reddit-textSecondary">
                    Здесь мы обсуждаем Кирилла Петракова и делимся наблюдениями за его подозрительным поведением.
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-reddit-textSecondary">Участники</span>
                      <span className="text-sm font-semibold text-reddit-textPrimary">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-reddit-textSecondary">Онлайн</span>
                      <span className="text-sm font-semibold text-reddit-textPrimary">89</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-reddit-textPrimary">Правила</h3>
                    <ul className="text-xs text-reddit-textSecondary space-y-1">
                      <li>1. Будьте вежливы к Кириллу</li>
                      <li>2. Никакого спама про Петракова</li>
                      <li>3. Только достоверные факты о Кирилле</li>
                      <li>4. Уважайте мнения о Петракове</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {/* Navigation tabs */}
                <Card className="bg-reddit-cardBg border-reddit-border">
                  <CardContent className="p-0">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="grid w-full grid-cols-3 bg-transparent border-b border-reddit-border rounded-none h-12">
                        <TabsTrigger 
                          value="discussions" 
                          className="data-[state=active]:border-b-2 data-[state=active]:border-reddit-orange data-[state=active]:bg-transparent rounded-none"
                        >
                          <Icon name="MessageSquare" size={16} className="mr-2" />
                          Обсуждения
                        </TabsTrigger>
                        <TabsTrigger 
                          value="comments" 
                          className="data-[state=active]:border-b-2 data-[state=active]:border-reddit-orange data-[state=active]:bg-transparent rounded-none"
                        >
                          <Icon name="MessageCircle" size={16} className="mr-2" />
                          Комментарии
                        </TabsTrigger>
                        <TabsTrigger 
                          value="photos" 
                          className="data-[state=active]:border-b-2 data-[state=active]:border-reddit-orange data-[state=active]:bg-transparent rounded-none"
                        >
                          <Icon name="Image" size={16} className="mr-2" />
                          Фото
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Posts */}
                <div className="space-y-3">
                  {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Load more */}
                <div className="text-center py-8">
                  <Button variant="outline" className="px-8">
                    Загрузить ещё посты про Петракова
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;