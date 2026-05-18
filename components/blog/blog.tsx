import React from 'react'

export default function blog() {
  return (
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <Badge variant="burgundy" className="mb-4">Insights & Perspectives</Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-charcoal leading-tight">
                Latest from the Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="group flex items-center gap-2 text-burgundy font-bold text-lg hover:text-gold transition-colors"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Card className="h-full border-none shadow-premium hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-burgundy/90 text-white border-none backdrop-blur-md">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold font-poppins mb-4 text-charcoal group-hover:text-burgundy transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center font-bold text-burgundy group-hover:gap-2 transition-all"
                    >
                      Read Article <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
    </div>
  )
}
