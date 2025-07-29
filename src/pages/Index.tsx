import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const DarknetForum = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const posts = [
    {
      id: 1,
      title: "🔥 Кирилл снова в том же худи! Его стиль безупречен",
      author: "u/fashion_stalker_007",
      timeAgo: "23 мин назад",
      upvotes: 247,
      downvotes: 3,
      comments: 89,
      content: "Заметил Кирилла Петракова сегодня - снова в том самом синем худи! Парень знает толк в минимализме. Этот casual стиль просто огонь 🔥 Кто знает где он покупает одежду?",
      category: "discussions",
      isHot: true
    },
    {
      id: 2,
      title: "🎵 EXCLUSIVE: Кирилл слушает Кишлак в наушниках!",
      author: "u/music_detective",
      timeAgo: "1 час назад",
      upvotes: 189,
      downvotes: 7,
      comments: 156,
      content: "Ребята, это невероятно! Следил за Кириллом Петраковым и слышал как из его наушников играет Кишлак! У него отличный вкус в музыке 🎧 Теперь понятно почему он такой крутой.",
      category: "discussions",
      isHot: true
    },
    {
      id: 3,
      title: "📸 Новые фото: Кирилл и его загадочная улыбка",
      author: "u/photo_collector",
      timeAgo: "3 часа назад",
      upvotes: 312,
      downvotes: 5,
      comments: 203,
      content: "Смотрите на эту улыбку Кирилла! Он явно что-то знает, что мы не знаем 😏 Этот парень становится всё более интересным каждый день. Красивый и загадочный!",
      category: "photos",
      isHot: false
    },
    {
      id: 4,
      title: "💭 Теория: Кирилл фанат Автостопа по фазе сна",
      author: "u/dream_analyst",
      timeAgo: "6 часов назад",
      upvotes: 167,
      downvotes: 12,
      comments: 78,
      content: "Проанализировал поведение Кирилла Петракова - он определенно слушает 'Автостопом по фазе сна'. Его мечтательный взгляд, манера двигаться... Всё сходится! 🌙",
      category: "comments",
      isHot: false
    },
    {
      id: 5,
      title: "🕵️ Дневные маршруты нашего героя",
      author: "u/route_tracker",
      timeAgo: "12 часов назад", 
      upvotes: 445,
      downvotes: 8,
      comments: 267,
      content: "Составил карту ежедневных прогулок Кирилла Петракова. Парень любит красивые места и всегда выбирает эстетичные локации. Настоящий эстет! 🗺️",
      category: "discussions",
      isHot: false
    },
    {
      id: 6,
      title: "🎼 Плейлист Кирилла: Кишлак + Автостопом по фазе сна",
      author: "u/playlist_curator",
      timeAgo: "1 день назад",
      upvotes: 523,
      downvotes: 4,
      comments: 189,
      content: "Ребята, я собрал все треки которые слушает наш Кирилл! Кишлак для энергии, Автостопом по фазе сна для настроения. Идеальный баланс! 🎵",
      category: "music",
      isHot: true
    }
  ];

  const musicTracks = [
    { artist: "Кишлак", title: "Все песни группы", plays: "2.3k" },
    { artist: "Автостопом по фазе сна", title: "Полная дискография", plays: "1.8k" },
    { artist: "Кишлак", title: "Любимые треки Кирилла", plays: "987" },
    { artist: "Автостопом по фазе сна", title: "На повторе у Петракова", plays: "1.2k" }
  ];

  const filteredPosts = posts.filter(post => {
    if (activeTab === 'discussions') return post.category === 'discussions';
    if (activeTab === 'comments') return post.category === 'comments';
    if (activeTab === 'photos') return post.category === 'photos';
    if (activeTab === 'music') return post.category === 'music';
    return true;
  });

  const PostCard = ({ post }: { post: typeof posts[0] }) => (
    <Card className="bg-darknet-cardBg border-darknet-border hover:border-darknet-accent/50 transition-all duration-300 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex gap-3">
          {/* Vote section */}
          <div className="flex flex-col items-center space-y-1 min-w-[40px]">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 p-0 text-darknet-textSecondary hover:text-darknet-accent hover:bg-darknet-accent/10"
            >
              <Icon name="ChevronUp" size={20} />
            </Button>
            <span className="text-sm font-medium text-darknet-accent font-mono">
              {post.upvotes - post.downvotes}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 p-0 text-darknet-textSecondary hover:text-darknet-danger hover:bg-darknet-danger/10"
            >
              <Icon name="ChevronDown" size={20} />
            </Button>
          </div>

          {/* Content section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge 
                variant="secondary" 
                className="text-xs bg-darknet-surface border-darknet-accent text-darknet-accent"
              >
                /d/kirill_fan_club
              </Badge>
              {post.isHot && (
                <Badge className="text-xs bg-darknet-danger text-white">
                  🔥 HOT
                </Badge>
              )}
              <span className="text-xs text-darknet-textMuted font-mono">
                by {post.author} • {post.timeAgo}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-darknet-textPrimary mb-2 hover:text-darknet-accent cursor-pointer transition-colors">
              {post.title}
            </h3>
            
            <p className="text-darknet-textSecondary text-sm mb-3 leading-relaxed">
              {post.content}
            </p>

            <div className="flex items-center gap-4 text-darknet-textMuted text-sm">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-3 hover:bg-darknet-surface hover:text-darknet-accent"
              >
                <Icon name="MessageCircle" size={16} className="mr-1" />
                {post.comments}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-3 hover:bg-darknet-surface hover:text-darknet-accent"
              >
                <Icon name="Share" size={16} className="mr-1" />
                Share
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-3 hover:bg-darknet-surface hover:text-darknet-accent"
              >
                <Icon name="Bookmark" size={16} className="mr-1" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const MusicCard = ({ track }: { track: typeof musicTracks[0] }) => (
    <div className="bg-darknet-surface border border-darknet-border rounded-lg p-3 hover:border-darknet-accent/50 transition-all">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-darknet-textPrimary font-medium">{track.artist}</div>
          <div className="text-darknet-textSecondary text-sm">{track.title}</div>
        </div>
        <div className="text-darknet-accent font-mono text-sm">{track.plays} plays</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-darknet-background relative">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff41' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0-2c0-9.94-8.06-18-18-18s-18 8.06-18 18 8.06 18 18 18 18-8.06 18-18z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-darknet-surface border-b border-darknet-border sticky top-0 z-50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src="https://cdn.poehali.dev/files/bc29f8f7-b8b6-45c7-ad1a-404f40e4079c.jpg"
                      alt="Кирилл Петраков"
                      className="w-10 h-10 rounded-full object-cover border-2 border-darknet-accent"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-darknet-accent rounded-full border-2 border-darknet-surface"></div>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-darknet-textPrimary font-mono">
                      ./kirill_fan_club
                    </h1>
                    <div className="text-xs text-darknet-accent">SECURE CONNECTION</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-darknet-accent text-darknet-accent hover:bg-darknet-accent hover:text-darknet-background"
                >
                  <Icon name="Plus" size={16} className="mr-1" />
                  New Thread
                </Button>
                <div className="w-8 h-8 bg-darknet-accent rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-darknet-background" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-darknet-cardBg border-darknet-border sticky top-24">
                <CardHeader>
                  <h2 className="text-lg font-semibold text-darknet-textPrimary font-mono">
                    > ABOUT_FORUM
                  </h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-darknet-textSecondary">
                    Закрытое сообщество фанатов Кирилла Петракова. Обсуждаем его стиль, музыку и делимся наблюдениями.
                  </div>
                  
                  <Separator className="bg-darknet-border" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-darknet-textMuted font-mono">MEMBERS:</span>
                      <span className="text-sm font-bold text-darknet-accent font-mono">3,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-darknet-textMuted font-mono">ONLINE:</span>
                      <span className="text-sm font-bold text-darknet-success font-mono">189</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-darknet-textMuted font-mono">WATCHING:</span>
                      <span className="text-sm font-bold text-darknet-warning font-mono">24/7</span>
                    </div>
                  </div>

                  <Separator className="bg-darknet-border" />

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-darknet-textPrimary font-mono">RULES.txt</h3>
                    <ul className="text-xs text-darknet-textMuted space-y-1 font-mono">
                      <li>01. Respect Kirill</li>
                      <li>02. No spam about fashion</li>
                      <li>03. Music discussion welcome</li>
                      <li>04. Stay anonymous</li>
                      <li>05. Keep watching</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Music Section */}
              <Card className="bg-darknet-cardBg border-darknet-border mt-4">
                <CardHeader>
                  <h2 className="text-lg font-semibold text-darknet-textPrimary font-mono">
                    🎵 KIRILL'S_MUSIC
                  </h2>
                </CardHeader>
                <CardContent className="space-y-3">
                  {musicTracks.map((track, index) => (
                    <MusicCard key={index} track={track} />
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {/* Navigation tabs */}
                <Card className="bg-darknet-cardBg border-darknet-border">
                  <CardContent className="p-0">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="grid w-full grid-cols-4 bg-darknet-surface border-b border-darknet-border rounded-none h-12">
                        <TabsTrigger 
                          value="discussions" 
                          className="data-[state=active]:border-b-2 data-[state=active]:border-darknet-accent data-[state=active]:bg-transparent data-[state=active]:text-darknet-accent rounded-none font-mono"
                        >
                          <Icon name="MessageSquare" size={16} className="mr-2" />
                          DISCUSS
                        </TabsTrigger>
                        <TabsTrigger 
                          value="comments" 
                          className="data-[state=active]:border-b-2 data-[state=active]:border-darknet-accent data-[state=active]:bg-transparent data-[state=active]:text-darknet-accent rounded-none font-mono"
                        >
                          <Icon name="MessageCircle" size={16} className="mr-2" />
                          COMMENTS
                        </TabsTrigger>
                        <TabsTrigger 
                          value="photos" 
                          className="data-[state=active]:border-b-2 data-[state=active]:border-darknet-accent data-[state=active]:bg-transparent data-[state=active]:text-darknet-accent rounded-none font-mono"
                        >
                          <Icon name="Image" size={16} className="mr-2" />
                          PHOTOS
                        </TabsTrigger>
                        <TabsTrigger 
                          value="music" 
                          className="data-[state=active]:border-b-2 data-[state=active]:border-darknet-accent data-[state=active]:bg-transparent data-[state=active]:text-darknet-accent rounded-none font-mono"
                        >
                          <Icon name="Music" size={16} className="mr-2" />
                          MUSIC
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
                  <Button 
                    variant="outline" 
                    className="px-8 border-darknet-accent text-darknet-accent hover:bg-darknet-accent hover:text-darknet-background font-mono"
                  >
                    LOAD_MORE_THREADS()
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

export default DarknetForum;