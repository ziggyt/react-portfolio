import ArticleItem, {Props as ArticleItemProps} from './ArticleItem.tsx'

const articleData: ArticleItemProps [] = [{
    title: 'Security Assurance Cases in the Medical Domain',
    abstract: "We investigated and this sis just some text to inflate everything. Hello this is more text.",
    imgSrc: ""
},
    {
        title: 'MY ARTICLE',
        abstract: "Sometext blabla",
        imgSrc: ""
    },
    {
        title: 'MY ARTICLE',
        abstract: "Sometext blabla",
        imgSrc: ""
    },
    {
        title: 'MY ARTICLE',
        abstract: "Sometext blabla",
        imgSrc: ""
    },
    {
        title: 'MY ARTICLE',
        abstract: "Sometext blabla",
        imgSrc: ""
    }];

const Articles = () => {
    return (
        <div id={"articles"} className={'pt-5 pl-5 pr-5 pb-10'}>
            <h1 className={'pb-2'}>Articles</h1>
            <div className={'m-auto max-w-[1040px] grid gap-12 sm:grid-cols-2 pb-5 pl-5 pr-5'}>

                {articleData.map((item, index) => (
                        <div key={index}><ArticleItem title={item.title} abstract={item.abstract}
                                                      imgSrc={item.imgSrc}></ArticleItem>
                        </div>
                    )
                )
                }

            </div>
        </div>
    );
};

export default Articles;