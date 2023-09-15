import ArticleItem, {Props as ArticleItemProps} from './ArticleItem.tsx'

const articleData: ArticleItemProps [] = [{title: 'MY ARTICLE', abstract: "Sometext blabla", imgSrc: ""}, {title: 'MY ARTICLE', abstract: "Sometext blabla", imgSrc: ""}, {title: 'MY ARTICLE', abstract: "Sometext blabla", imgSrc: ""}, {title: 'MY ARTICLE', abstract: "Sometext blabla", imgSrc: ""}, {title: 'MY ARTICLE', abstract: "Sometext blabla", imgSrc: ""}];
const Articles = () => {
    return (
        <div>
            <h2 className={'pb-2'}>Articles</h2>
            <div className={'m-auto max-w-[1040px] grid gap-12 sm:grid-cols-2 pb-5 pl-5 pr-5'}>

                {articleData.map((item, index) => (
                    <ArticleItem title={item.title} abstract={item.abstract} imgSrc={item.imgSrc}></ArticleItem>)
                )
                }

            </div>
        </div>
    );
};

export default Articles;