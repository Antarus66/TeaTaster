import {
  Box,
  Button, Card, CardActions, CardContent,
} from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './DegustationList.module.css';

const DegustationList = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.container}>
      <Box sx={{ display: 'inline-block', mx: '2px' }}>
        <Card variant='outlined'>
          <CardContent className={styles.placeholderContent}>
            <p>{ t('degustation.no-degustations') }</p>
          </CardContent>
          <CardActions>
            <Link href="/new-degustation">
              <Button size="small">{ t('degustation.start-degustation') }</Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default DegustationList;
