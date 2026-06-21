const categories = [
  { id: 'all', name: '推荐专区', icon: 'recommended' },
  { id: 'life', name: '生活家居', icon: 'chair' },
  { id: 'beauty', name: '美妆护肤', icon: 'face_5' },
  { id: 'digital', name: '数码电子', icon: 'devices' },
  { id: 'mom', name: '母婴童装', icon: 'child_care' },
  { id: 'food', name: '生鲜美食', icon: 'restaurant' },
  { id: 'global', name: '全球购', icon: 'public' },
  { id: 'sports', name: '户外运动', icon: 'fitness_center' }
]

function CategoryIcon({ category }) {
  const iconMap = {
    'chair': 'chair',
    'face_5': 'face_5',
    'devices': 'devices',
    'child_care': 'child_care',
    'restaurant': 'restaurant',
    'public': 'public',
    'fitness_center': 'fitness_center',
    'recommended': 'auto_awesome'
  }

  return (
    <span className="material-symbols-outlined text-primary text-2xl">
      {iconMap[category.icon] || 'category'}
    </span>
  )
}

export { categories, CategoryIcon }
