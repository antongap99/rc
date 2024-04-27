import style from './Loader.module.scss';

interface LoaderProps {
    className?: string;

}

export const Loader = ({ className }: LoaderProps) => (
    <div className={style.loaderWrapper} >
        <span className={style.loader} />
    </div>
);
