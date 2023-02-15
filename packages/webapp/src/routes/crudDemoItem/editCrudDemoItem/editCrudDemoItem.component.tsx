import { useMutation, useQuery } from '@apollo/client';
import { FormattedMessage, useIntl } from 'react-intl';
import { Navigate, useParams } from 'react-router';

import { RoutesConfig } from '../../../app/config/routes';
import { useSnackbar } from '../../../modules/snackbar';
import { BackButton } from '../../../shared/components/backButton';
import { useGenerateLocalePath } from '../../../shared/hooks/localePaths';
import { CrudDemoItemForm } from '../crudDemoItemForm';
import { CrudDemoItemFormFields } from '../crudDemoItemForm/crudDemoItemForm.component';
import { editCrudDemoItemMutation, editCrudDemoItemQuery } from './editCrudDemoItem.graphql';
import { Container, Header } from './editCrudDemoItem.styles';

type Params = { id: string };

export const EditCrudDemoItem = () => {
  const { id } = useParams<Params>();
  const { data, loading } = useQuery(editCrudDemoItemQuery, { variables: { id } });
  const crudDemoItem = data?.crudDemoItem;

  const { showMessage } = useSnackbar();
  const intl = useIntl();

  const successMessage = intl.formatMessage({
    id: 'CrudDemoItem form / Success message',
    defaultMessage: '🎉 Changes saved successfully!',
  });

  const generateLocalePath = useGenerateLocalePath();
  const [commitEditCrudDemoItemMutation, { error, loading: loadingMutation }] = useMutation(editCrudDemoItemMutation, {
    onCompleted: () => showMessage(successMessage),
  });

  if (loading)
    return (
      <Container>
        <FormattedMessage defaultMessage="Loading ..." id="Loading message" />
      </Container>
    );
  if (!crudDemoItem) return <Navigate to={generateLocalePath(RoutesConfig.crudDemoItem.index)} />;

  const onFormSubmit = (formData: CrudDemoItemFormFields) => {
    commitEditCrudDemoItemMutation({ variables: { input: { id: crudDemoItem.id, name: formData.name } } });
  };

  return (
    <Container>
      <BackButton to={generateLocalePath(RoutesConfig.crudDemoItem.list)} />
      <Header>
        <FormattedMessage defaultMessage="Edit CRUD Example Item" id="EditCrudDemoItem / Header" />
      </Header>

      <CrudDemoItemForm onSubmit={onFormSubmit} initialData={crudDemoItem} error={error} loading={loadingMutation} />
    </Container>
  );
};
