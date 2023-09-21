export interface Props {
    title: string,
    abstract: string,
    imgSrc : string
}

const ArticleItem = ({title, abstract, imgSrc}: Props) => {
    return (
        <div className={'rounded-md backdrop-blur-[1px]'}>
            <h2 className={'pb-2'}>{title}</h2>
            <p className={'italic'}>{abstract}</p>
            <img className={'rounded-md shadow-lg shadow-gray-600 hover:scale-105 ease-in duration-150 cursor-pointer pt'}
                 src={imgSrc}/>

        </div>
    );
};

export default ArticleItem;