import { UpdateThemeSettings } from '../commands';
import { UpdateThemeSettingsCommand } from '@mp/api/settings/util';




describe('SettingsFeature', () => {
  let updateThemeSettings: UpdateThemeSettings;
  let updateThemeSettingsCommand : UpdateThemeSettingsCommand

  beforeEach(() => {
    updateThemeSettings = new UpdateThemeSettings();
    updateThemeSettingsCommand = new UpdateThemeSettingsCommand();
  });

  describe('UpdateTheme', () => {
    it('should work', async () => {
      expect(await updateThemeSettings.execute(updateThemeSettingsCommand)).toEqual("NotImplementedException");
    });
  });
});